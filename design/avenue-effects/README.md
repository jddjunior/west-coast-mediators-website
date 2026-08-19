# West Coast Mediators — effects redesign exploration

A motion-forward take on the homepage, referencing the interaction language of
[screentune.app](https://screentune.app): custom cursor, scroll-linked parallax,
magnetic buttons, 3D tilt on cards, scroll-triggered reveals, a marquee ribbon,
scramble/decode stat text, and cursor-spotlight glow on the dark sections.

It's built on the site's real brand tokens (navy `#0A1B2E`, forest `#23423D`,
gold `#B99B5A`) and real copy from `components/`, `app/globals.css`, and
`README.md` — not placeholder content.

**View / edit it:** https://claude.ai/code/artifact/dcbe2edf-2545-4745-9cf5-6b3fae78cebc

This directory holds the design source only:

- `Main.dc.html` — the homepage artboard (markup, styles, and the interaction
  logic that drives the effects above).
- `canvas.json` — canvas layout for the published design.

These files aren't wired into the Next.js app (`/app`, `/components`) or the
static export (`/html-export`) — this is a design exploration to react to
before anything is built into the real site.
