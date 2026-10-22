import { rsvpForm } from '../../data/weddingData';
import { RsvpSubmissionError, createId } from './types';

/** Google Form field mapping. Lives in `src/data/weddingData.js`. */
export const GOOGLE_FORM_ENTRIES = rsvpForm.fields;

export function googleFormResponseUrl(action = rsvpForm.action) {
  return action;
}

/** Builds the `application/x-www-form-urlencoded` body Google Forms expects. */
export function buildGoogleFormBody(submission) {
  const f = GOOGLE_FORM_ENTRIES;
  const attending = submission.attendance === 'attending';
  const body = new URLSearchParams();

  // If the form's "Whatsapp number" question has Google's built-in Number
  // validation, a leading '+' fails it and the whole submission is rejected
  // with a 400 that names no field. Send digits only.
  const digitsOnlyPhone = (submission.phone ?? '').replace(/[^\d]/g, '');

  body.set(f.name, submission.fullName ?? '');
  body.set(
    f.attending,
    attending ? rsvpForm.attendingOptions.yes : rsvpForm.attendingOptions.no,
  );
  body.set(f.guestOf, submission.guestOf ?? '');
  // A decline has no "which part" answer; the question is skipped.
  if (attending && submission.part) body.set(f.part, submission.part);
  body.set(f.phone, digitsOnlyPhone);
  body.set(f.email, submission.email ?? '');
  body.set(f.comments, (submission.messageToCouple ?? '').trim());

  /*
    Deliberately NOT sending the special 'emailAddress' parameter. It makes
    Google treat the post as a VERIFIED email submission, which requires a
    signed-in Google account and answers 401 to anonymous posts.
  */
  body.set('fvv', '1');
  body.set('pageHistory', '0');

  return body;
}

/**
 * Posts the RSVP straight to the couple's Google Form from the browser.
 *
 * Google Forms does not send CORS headers, so the request is made in
 * `no-cors` mode: the row is written, but the browser will not let us read
 * the response. A network-level failure still throws, which is the only
 * signal we can act on.
 *
 * Fallback path for hosts without the serverless `/api/rsvp` function
 * (including `vite dev`).
 */
export class GoogleFormRsvpService {
  constructor(action = rsvpForm.action, fetchImpl = fetch.bind(globalThis)) {
    this.action = action;
    this.fetchImpl = fetchImpl;
  }

  async submit(submission) {
    try {
      await this.fetchImpl(googleFormResponseUrl(this.action), {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: buildGoogleFormBody(submission).toString(),
      });
      return { id: createId(), submission };
    } catch (error) {
      throw new RsvpSubmissionError('We could not reach the RSVP form.', error);
    }
  }
}
