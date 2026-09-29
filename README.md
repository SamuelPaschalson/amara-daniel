# Amanda & Nnanyelugo — Wedding Website

A production-ready editorial wedding website built with React, Vite, React Router, and modern CSS. It includes responsive navigation, live countdown, animated story and timeline, image gallery with keyboard-accessible lightbox, travel guidance, FAQ, RSVP flow, local guestbook, optional music, and custom error handling.

## Install and run

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The optimized production output is written to `dist/`.

## Customize the wedding

All repeated wedding content is centralized in `src/data/weddingData.js`.

- **Couple names:** edit `couple.partnerOne`, `couple.partnerTwo`, and `couple.initials`.
- **Wedding date:** edit `dateISO` (used by the live countdown), `date`, `dateShort`, and `day`.
- **Venue:** edit `venue`, `location`, `mapUrl`, and the `events` list.
- **Story, schedule, hotels, dress palette, and FAQ:** edit their matching arrays in the same file.

## Replace images

Images live in `public/images/`. Replace them while keeping the same filenames, or update the paths generated in `src/data/weddingData.js`. Use optimized WebP or AVIF images where practical. The hero should be at least 1600px wide; gallery images can be 1000–1600px on the long edge. Preserve meaningful alt text in the `gallery`, `story`, and `coupleProfiles` objects.

## Add or replace music

1. Put an optimized `.mp3` or `.ogg` file in `public/audio/`.
2. Set `audioUrl` in `src/data/weddingData.js`, for example `/audio/our-song.mp3`.
3. The floating player will appear automatically. Audio never starts without a user action. Leave `audioUrl` empty to remove the player.

## Connect RSVP to a real backend

The UI calls `submitRSVP()` in `src/services/rsvpService.js`. Replace that function's localStorage implementation with `fetch()` to your endpoint while preserving the same promise-based interface:

```js
export async function submitRSVP(payload) {
  const response = await fetch('/api/rsvp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error('We could not send your RSVP.');
  return response.json();
}
```

Validate and sanitize data again on the server, add rate limiting, protect stored personal data, and configure transactional email if confirmations are needed.

## Routes

- `/` — complete wedding website
- `/rsvp` — dedicated RSVP experience
- `/guestbook` — local guestbook
- Any invalid path — custom 404 page

## Accessibility and performance

The site uses semantic sections, labels, visible focus styles, keyboard lightbox controls, an accessible mobile menu, lazy-loaded gallery imagery, responsive layouts, route-level code splitting, and reduced-motion support.

## Invitation envelope and colors

The opening envelope is implemented in `src/components/EnvelopeIntro.jsx`. Its animation and responsive styling are in `src/styles/globals.css`. The first seal click is the required user gesture that starts the configured soundtrack; the site never begins audio before the guest opens the invitation.

The colors of the day—burgundy, champagne gold, and rose gold—are defined in `dressColors` in `src/data/weddingData.js` and as reusable CSS variables in `src/styles/globals.css`.

## Invitation envelope and colors

The opening envelope is implemented in `src/components/EnvelopeIntro.jsx`. Its animation and responsive styling are in `src/styles/globals.css`. The first seal click is the required user gesture that starts the configured soundtrack; the site never begins audio before the guest opens the invitation.

The colors of the day—burgundy, champagne gold, and rose gold—are defined in `dressColors` in `src/data/weddingData.js` and as reusable CSS variables in `src/styles/globals.css`.

## Envelope session behavior

After the guest opens the invitation, the open state is saved in `sessionStorage`. Client-side navigation between the home, RSVP, guestbook, and section links will not replay the envelope. Closing the browser tab ends the session, so a future visit can begin with the invitation again.

The navigation and music controls are mounted at the application root and remain fixed to the viewport across every route.
