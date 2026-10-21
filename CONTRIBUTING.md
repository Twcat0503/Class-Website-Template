# Contributing

Thanks for helping make this template better for every class. The template is
intentionally minimal and readable for students; keep that in mind with every
change.

Issues and pull requests in English or 繁體中文 are both welcome.

## Development

Requires Node.js 20.9 or later.

```bash
npm ci
npm run dev        # development server at http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Project layout

Five App Router pages under `app/`, wrapped by a shared navigation shell in
`components/site-shell.tsx` (nav, loading screen, footer). `navItems` at the
top of that file is the single source of truth for the navbar; every `href`
needs a matching page under `app/`. Theme logic lives in
`components/theme-toggle.tsx` and `app/globals.css`.

See [docs/CUSTOMIZATION.md](docs/CUSTOMIZATION.md) for the full walkthrough.

## Making changes

- Explain the problem, the change, and the resulting behavior in the pull
  request.
- Test all five pages, on desktop and mobile widths, in light and dark theme.
  Include screenshots for visual changes.
- Do not put real student names, photos, or contact details in code, sample
  content, or screenshots — use obviously fake examples.
- The template ships with no runtime extras (no UI kits, no tracking). Prefer
  CSS and the existing dependencies; new dependencies need a strong reason and
  must be justified in the pull request.
- Keep code readable for students: TypeScript throughout, 2-space indentation,
  Tailwind utility classes (always paired with `dark:` variants), English code
  comments.
- Keep the `預留` placeholder convention for content classes are expected to
  fill in.
- Contributions are licensed under the same [MIT](LICENSE) license as the
  project, and you may only submit content you have the rights to share.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/) in English:
`feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`. Imperative subject,
lowercase, no period, 72 characters or fewer. One concern per commit.

## Releases

Maintainers bump `package.json` and add a [CHANGELOG.md](CHANGELOG.md) entry,
then push a `vX.Y.Z` tag.

## Security issues

Please do not open public issues for suspected vulnerabilities — see
[SECURITY.md](SECURITY.md).
