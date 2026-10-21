# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Bilingual documentation: English and Traditional Chinese README files and
  customization guides (`docs/CUSTOMIZATION.md`, `docs/CUSTOMIZATION.zh-TW.md`).
- Contributor documentation: `CONTRIBUTING.md`, `SECURITY.md`, and this
  changelog.
- GitHub repository hygiene: issue forms (bug report, feature request), a pull
  request template, a CI workflow running lint, typecheck, and build, plus
  `.editorconfig` and `.gitattributes`.
- `typecheck` script and `engines` field in `package.json`.

## [1.0.0] - 2026-06-08

### Added

- Initial template: Home, About, Showcase, Members, and Contact pages built
  with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.
- Shared navigation shell with sticky desktop navbar, scrollable mobile nav,
  active-link highlighting, loading screen, and footer.
- Light/dark theme toggle with `localStorage` persistence and
  `prefers-color-scheme` fallback.
- Responsive layout with `預留` placeholder content on every page.

[Unreleased]: https://github.com/Twcat0503/Class-Website-Template/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/Twcat0503/Class-Website-Template/releases/tag/v1.0.0
