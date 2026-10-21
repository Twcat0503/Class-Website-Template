# Security Policy

## What this template does with data

The template is a static front end:

- No API routes, no authentication, no data collection, no cookies, no
  analytics.
- The only client-side state is the theme preference stored in
  `localStorage` under the `class-web-theme` key.
- Fonts are bundled at build time via `next/font`; there are no runtime
  third-party requests.

Everything shipped to the browser is public. Never place secrets in client
code — `.env*` files are gitignored, but anything rendered into the page is
visible to visitors.

## Privacy expectations

The Members and Contact pages are designed to carry personal data (rosters,
photos, email addresses). That data is published by the class that deploys the
site, and the class is responsible for collecting consent before publishing
real names or contact details. Sample content in this repository uses `預留`
placeholders, not real people.

## Reporting a vulnerability

Report suspected vulnerabilities **privately** before disclosing them
publicly:

- Use GitHub's *Report a vulnerability* form on the
  [Security tab](https://github.com/Twcat0503/Class-Website-Template/security/advisories/new), or
- Contact the maintainer directly.

Please do not open a public issue first. Include the affected version or
commit, browser and OS, and a minimal reproduction. The maintainer aims to
respond within 14 days, and fixes are released as regular version bumps.

Most real-world "security" reports for this template will actually be privacy
issues (exposed rosters, leftover personal data in a fork) — those are best
handled by the class deploying the site.
