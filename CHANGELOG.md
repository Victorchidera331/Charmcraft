# CharmCraft — CHANGELOG

## v1.0.0 Foundation (2026-07-22)

### Sprint 1 — Stability Fixes

**Files changed:** `script.js`

| Fix | Description |
|-----|-------------|
| P1-1 | Added null guards to `sendCoachMessage()` — guards for `$('coach-input')` and `$('coach-chat-area')` |
| P1-2 | Added null guards to `generateReplies()`, `analyzeChat()`, `generateStarter()` — guards for all DOM reads |
| P1-3 | Fixed closure bug in `updateFavoritesUI()` — remove button now reads `data-index` attribute instead of stale closure variable `i` |

### Sprint 2 — Production Readiness

**Files changed:** `index.html`, `style.css`, `script.js`

| Fix | Description |
|-----|-------------|
| P2-1 | Added `type="button"` to all 40 `<button>` elements |
| P2-2 | Rebuilt dark mode with `body.dark-mode` CSS class (160+ lines), replaced inline `body.style` approach. Covers app-header, coach-card, input-card, settings-row, profile-card, premium-feature, bottom-nav, result-card, coach-bubble, tool-card, chip |
| P2-3 | Added 7 `<label for="...">` associations for all form controls |
| P2-4 | Added `aria-label` attributes to `btn-coach-send` ("Send message") and verified existing labels |

### Sprint 3 — Code Quality & Smart Charm Score

**Files changed:** `index.html`, `style.css`, `script.js`

| Fix | Description |
|-----|-------------|
| P3-1 | Created `FONT_SIZES` constant, removed 3 duplicate inline objects |
| P3-2 | Merged duplicate focus styles — `.coach-input:focus`, `.input-textarea:focus`, `.input-field:focus` into single combined selector (light + dark) |
| P3-3 | Removed unused function parameters: `getAnalysisTip(s,e,c)` → `()`, `getPickupLines(style,hint)` → `(style)`, `getReplySuggestions(message,context)` → `(context)` |
| P3-4 | Made Charm Score dynamic — replaced hardcoded `72` and static bar widths with `calculateCharmScore()` derived from `toolsUsed`, `favorites.length`, `streak` |
| P3-5 | Wired `updateCharmScoreUI()` into `updateProfileStats()` and `init()` for automatic updates |

### Sprint 4 — APK Readiness & UI Polish

**Files changed:** `index.html`, `style.css`, `manifest.json` (new)

| Fix | Description |
|-----|-------------|
| P4-1 | Added APK meta tags: `theme-color`, `apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`, `<link rel="manifest">`. Created `manifest.json` |
| P4-2 | Added `:focus-visible` styles for all 13 interactive element classes (light + dark mode) |
| P4-3 | Added `-webkit-tap-highlight-color: transparent`; enlarged touch targets to 44px minimum; added active-state feedback for 8 element types |
| P4-4 | Added `env(safe-area-inset-top)` to body and header; `env(safe-area-inset-bottom)` to body, screen, and bottom-nav |
| P4-5 | Added `@media (min-width: 768px)` tablet optimization: 720px max-width, 3-column tools-grid, centered charm stats |
| P4-6 | Added `defer` to `<script>` tag |

### Sprint 5 — Final QA & Regression Test

**Files changed:** `script.js` (1 null guard), `CHANGELOG.md` (new), `RELEASE_NOTES.md` (new)

| Fix | Description |
|-----|-------------|
| P5 | Added null guard to `analyzeChat()` container element `$('analyzer-results')` |
| QA | Verified: 11 screens, 40 buttons, 10 navigation paths, dark mode, font size, localStorage, responsive layout, accessibility, APK readiness — all passing |

### Bug Fixes Summary

| Bug | Sprint | Severity |
|-----|--------|----------|
| `sendCoachMessage()` crashes if coach-input not in DOM | S1 | Critical |
| Tool functions crash on missing DOM elements | S1 | Critical |
| Favorites remove button always removes last item | S1 | Critical |
| 40 buttons missing `type="button"` (form submission risk) | S2 | High |
| Dark mode only changed body background, not app chrome | S2 | High |
| 7 form controls missing `<label for>` associations | S2 | High |
| `aria-label` missing on key interactive elements | S2 | High |
| `FONT_SIZES` object duplicated 3 times | S3 | Medium |
| Focus CSS duplicated 3 times in light mode, 2 times in dark | S3 | Medium |
| 3 functions with unused parameters | S3 | Medium |
| Charm Score hardcoded, never updated | S3 | Medium |
| Missing APK meta tags and manifest | S4 | Low |
| Missing `:focus-visible` keyboard indicators | S4 | Low |
| No tap highlight suppression | S4 | Low |
| Touch targets below 44px minimum | S4 | Low |
| Missing active-state feedback on most buttons | S4 | Low |
| No iPhone notch / safe area support | S4 | Low |
| No tablet layout optimization | S4 | Low |
| Script tag missing `defer` | S4 | Low |
| `analyzeChat` missing null guard on results container | S5 | Low |

---

*CharmCraft v1.0.0 Foundation — Production-ready APK baseline*

### Sprint 15 — Cloud Backend & Auth
- 6 auth screens (Welcome/Login/Register/Forgot/Account/Subscription)
- 14 service files with production architecture
- Firebase, CloudSync, Notifications, Analytics, RemoteConfig, Security services
- 18 admin modules including Cloud Config and Push Notifications

### Sprint 16 — Release Candidate 1 (RC1)
- PerformanceService with debounce/throttle/memoize/batched localStorage
- Comprehensive 42-point audit — 100% pass rate
- RC1 release notes with full project statistics
- Play Store / APK / AAB ready verification
- 0 duplicate IDs, 0 console errors, all features preserved across 15 sprints
