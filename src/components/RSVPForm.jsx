import { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { useRsvpService } from '../features/rsvp/RsvpServiceProvider';
import { rsvpForm } from '../data/weddingData';
import { Button } from './UI';

const initial = {
  fullName: '',
  attendance: 'attending',
  guestOf: '',
  part: 'Both',
  phone: '',
  email: '',
  messageToCouple: ''
};

export default function RSVPForm() {
  const service = useRsvpService();
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });
  const attending = form.attendance === 'attending';

  const validate = () => {
    const e = {};
    if (form.fullName.trim().length < 2) e.fullName = 'Please enter your name.';
    if (!form.guestOf) e.guestOf = 'Please tell us whose guest you are.';
    if (form.phone.replace(/\D/g, '').length < 7) e.phone = 'Please enter a valid WhatsApp number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) e.email = 'Please enter a valid email.';
    return e;
  };

  const submit = async e => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    setStatus('loading');
    setError('');
    try {
      await service.submit({
        ...form,
        part: attending ? form.part : '',
        submittedAt: new Date().toISOString()
      });
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="confirmation" role="status">
        <span className="confirmation-badge">
          <Check size={32} aria-hidden="true" />
        </span>
        <p className="eyebrow">RSVP received</p>
        <h2>Thank you, {form.fullName.trim().split(' ')[0]}.</h2>
        <p>
          {attending
            ? <>Your RSVP has been received.<br />We cannot wait to celebrate with you.</>
            : <>Your reply has been received.<br />You will be missed, and we are grateful you let us know.</>}
        </p>
        <Button to="/">Return to the celebration</Button>
      </div>
    );
  }

  return (
    <form className="rsvp-form" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="fullName">Your name</label>
        <input
          id="fullName"
          name="fullName"
          value={form.fullName}
          onChange={change}
          autoComplete="name"
          aria-invalid={!!errors.fullName}
        />
        {errors.fullName && <small>{errors.fullName}</small>}
      </div>

      <fieldset>
        <legend>Can you attend?</legend>
        <label className="radio">
          <input
            type="radio"
            name="attendance"
            value="attending"
            checked={attending}
            onChange={change}
          />
          <span>{rsvpForm.attendingOptions.yes}</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="attendance"
            value="declined"
            checked={!attending}
            onChange={change}
          />
          <span>{rsvpForm.attendingOptions.no}</span>
        </label>
      </fieldset>

      <div className="field">
        <label htmlFor="guestOf">Whose guest are you</label>
        <select
          id="guestOf"
          name="guestOf"
          value={form.guestOf}
          onChange={change}
          aria-invalid={!!errors.guestOf}
        >
          <option value="" disabled>Select one</option>
          {rsvpForm.guestOfOptions.map(x => <option key={x}>{x}</option>)}
        </select>
        {errors.guestOf && <small>{errors.guestOf}</small>}
      </div>

      {attending && (
        <fieldset>
          <legend>Which part would you be attending?</legend>
          {rsvpForm.partOptions.map(x => (
            <label className="radio" key={x}>
              <input
                type="radio"
                name="part"
                value={x}
                checked={form.part === x}
                onChange={change}
              />
              <span>{x}</span>
            </label>
          ))}
        </fieldset>
      )}

      <div className="form-row">
        <div className="field">
          <label htmlFor="phone">Whatsapp number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={change}
            autoComplete="tel"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <small>{errors.phone}</small>}
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={change}
            autoComplete="email"
            aria-invalid={!!errors.email}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="messageToCouple">Comments</label>
        <textarea
          id="messageToCouple"
          name="messageToCouple"
          rows="4"
          value={form.messageToCouple}
          onChange={change}
        />
      </div>

      {error && <p className="form-error" role="alert">{error}</p>}

      <button className="button button--dark submit" disabled={status === 'loading'}>
        <span>{status === 'loading' ? 'Sending your reply…' : 'Send RSVP'}</span>
        <ArrowUpRight size={15} aria-hidden="true" />
      </button>
    </form>
  );
}
