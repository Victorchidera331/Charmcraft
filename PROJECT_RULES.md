# CharmCraft Project Rules

## Core Identity

- **Project Name:** CharmCraft
- **Purpose:** AI-powered conversation coach for communication, confidence, dating, friendships, networking, and relationships
- **Branding:** Purple (`#7c3aed` / `#8b5cf6` / `#6d28d9`)
- **Permanent AI Assistant:** Coach Victor
- **Design:** Mobile-first only

## File Structure

```
index.html   — All screens, single page, inside <body>
style.css    — All styles, purple branding, mobile-first
script.js    — All interactivity, screen navigation, tool logic
```

## Development Rules

1. **Never redesign unless requested.**
2. **Always preserve existing work.** Improve, don't replace.
3. **Keep purple branding.**
4. **Mobile-first.** Design for 480px max-width.
5. **One feature at a time.**
6. **Every completed feature must be tested before adding another.**
7. **No duplicate code.**
8. **No duplicate IDs.** Every `id` must be unique across all screens.
9. **No duplicate screens.** Each screen is a single `<section>` with a unique `id`.
10. **Every button must have a working action.**
11. **The app must remain APK-ready.**
12. **Always explain what you changed.**
13. **Never generate placeholder code if a working implementation can be created.**
14. **If something is broken, repair it instead of rebuilding it.**
15. **Before changing anything, analyze the existing project first.**

## Screens

| Screen ID | Name | Description |
|---|---|---|
| `screen-home` | Home / Coach Victor | Chat with AI coach, quick-tools grid |
| `screen-reply-assistant` | Reply Assistant | Generate smart replies to messages |
| `screen-chat-analyzer` | Chat Analyzer | Analyze conversation tone & engagement |
| `screen-pickup-lines` | Pickup Lines | Generate pickup lines by style |
| `screen-status-studio` | Status Studio | Craft social media statuses |
| `screen-convo-starter` | Conversation Starter | Get openers for any scenario |
| `screen-charm-score` | Charm Score | View communication skill scores |
| `screen-favorites` | Favorites | Saved items across all tools |
| `screen-profile` | Profile | User stats and actions |
| `screen-premium` | Premium | Upgrade plans |
| `screen-settings` | Settings | Appearance, notifications, about |

## Navigation

- **Bottom nav:** Coach, Favorites, Charm, Profile, Settings
- **Back buttons:** Return to previous screen
- **Tool cards:** Navigate from home to each tool
- **Premium buttons:** Navigate to Premium screen

## State

- `localStorage` keys: `charmcraft_favorites`, `charmcraft_tools_used`, `charmcraft_streak`, `charmcraft_dark_mode`, `charmcraft_font_size`, `charmcraft_daily_tips`, `charmcraft_reminders`

---

*Last updated: 2026-07-22*
