# CharmCraft v1.0.0 Foundation — Release Notes

**Release Date:** 2026-07-22  
**Status:** Production-ready APK baseline  

---

## About CharmCraft

CharmCraft is an AI-powered conversation coach that helps users improve communication, confidence, dating conversations, friendships, networking, and relationships. Built mobile-first with purple branding and featuring Coach Victor as the permanent AI assistant.

---

## What's Included

### Core Screens (11 total)

| Screen | Purpose |
|--------|---------|
| **Coach Victor** | Chat with the AI conversation coach |
| **Reply Assistant** | Generate smart replies to messages (5 contexts) |
| **Chat Analyzer** | Analyze conversation tone, engagement, and clarity |
| **Pickup Line Generator** | Generate pickup lines (4 styles: Funny, Smooth, Clever, Bold) |
| **Status Studio** | Craft social media status updates (4 vibes) |
| **Conversation Starter** | Get the perfect opener for 6 scenarios |
| **Charm Score** | Dynamic communication skill tracker (Confidence, Wit, Empathy, Rizz) |
| **Favorites** | Save and manage favorite content across all tools |
| **Profile** | View stats: Tools Used, Favorites, Day Streak |
| **Premium** | Upgrade plans (Monthly $4.99, Yearly $29.99) |
| **Settings** | Dark mode, font size, notification toggles |

### Key Features

- Coach Victor AI with contextual responses
- Dynamic Charm Score calculated from real usage data
- Favorites with persistent storage (localStorage)
- Dark mode with full component coverage
- Responsive: mobile-first design with tablet optimization (768px+)
- Keyboard accessible with visible focus indicators
- Screen reader support with proper label associations
- iPhone notch / safe area support
- APK-ready with manifest.json and standalone meta tags

### Technical Specifications

| Attribute | Value |
|-----------|-------|
| Files | `index.html`, `style.css`, `script.js`, `manifest.json` |
| Screens | 11 single-page sections |
| Buttons | 40 (all with `type="button"`) |
| CSS variables | 35+ custom properties |
| Dark mode coverage | 11+ components |
| localStorage keys | 7 |
| Touch targets | 44px minimum (WCAG 2.5.5) |
| Max mobile width | 480px |
| Tablet breakpoint | 768px → 720px max-width |
| APK theme color | `#7c3aed` (purple) |

### Accessibility

- All form controls have associated `<label>` elements
- Interactive elements have `aria-label` attributes
- Screen-reader-only label for coach input
- `:focus-visible` keyboard navigation indicators
- Proper toggle controls with `for` attributes

### Performance

- Single-page application (no page reloads)
- `defer` script loading
- CSS custom properties for consistent theming
- Zero external JavaScript dependencies
- Google Fonts with `preconnect` optimization

---

## Known Limitations (v1.0.0)

- Charm Score streak counter is not yet time-based (starts at 0)
- Profile editing opens an alert placeholder
- Premium purchases are demo-only alerts
- No backend API integration (all content is client-side)
- No service worker for offline support

---

## File Manifest

| File | Size | Lines |
|------|------|-------|
| `index.html` | 19 KB | 428 |
| `style.css` | 27 KB | 1,467 |
| `script.js` | 26 KB | 706 |
| `manifest.json` | 567 B | 20 |
| `PROJECT_RULES.md` | 2.7 KB | 67 |
| `CHANGELOG.md` | — | — |
| `RELEASE_NOTES.md` | — | — |

---

## Credits

Built with 💜 by the CharmCraft team.  
Coach Victor is waiting to help you level up your communication.
