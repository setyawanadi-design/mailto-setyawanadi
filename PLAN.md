# Audit Fix Plan — mailto-setyawanadi

Based on the full codebase audit, here's the prioritized plan to fix all identified issues.

---

## Phase 1: Critical Fixes (Security & Bugs)

### 1.1 Add SRI hash to Sveltia CMS CDN script
- **File:** `src/pages/admin.astro`
- **Issue:** `unpkg.com` script loaded without `integrity` attribute — supply-chain risk
- **Fix:** Add `integrity` + `crossorigin="anonymous"` to the `<script>` tag

### 1.2 Fix duplicate `_subject` form field
- **File:** `src/components/FormModal.astro`
- **Issue:** Hidden `_subject` input always present + visible subject input conditionally gets the same `name`, causing duplicate fields sent to Formspree
- **Fix:** Remove the hidden `_subject` input; let the visible input always carry the name, or use JS to sync a single hidden field

### 1.3 Fix submit button label not restoring correctly
- **File:** `src/components/FormModal.astro`
- **Issue:** After submission, button always resets to `"Send Message"` instead of the original `submitLabel` prop
- **Fix:** Store original label and restore it in the `finally` block

---

## Phase 2: Medium Fixes (Bugs & Robustness)

### 2.1 Fix event listener leak on `/logs`
- **File:** `src/pages/logs/index.astro`
- **Issue:** `keydown` listener added inside `astro:page-load` without cleanup — accumulates on each navigation
- **Fix:** Use a guard pattern (like `__swapRegistered` in EmailLayout) or use `{ once: true }` / cleanup on `astro:before-swap`

### 2.2 Fix `replyQueue` / `checkInterval` leak across navigations
- **File:** `src/pages/logs/index.astro`
- **Issue:** Module-level `let` variables and intervals persist across View Transitions
- **Fix:** Clear interval and queue on `astro:before-swap`

### 2.3 Replace hardcoded colors in log single page
- **File:** `src/pages/logs/[slug].astro`
- **Issue:** Uses raw hex colors (`#fff`, `#0f172a`, etc.) instead of CSS variables
- **Fix:** Replace with design token variables (`--bg-detail`, `--text-primary`, etc.) and remove the manual dark-mode override block

### 2.4 Fix array mutation in `[slug].astro`
- **File:** `src/pages/[folder]/[slug].astro`
- **Issue:** `items.sort()` mutates the original array
- **Fix:** Use `[...items].sort()` (spread before sort)

### 2.5 Fix stale "today/this week" dates in SSG
- **File:** `src/components/MessageList.astro`
- **Issue:** `formatDate()` compares against `new Date()` at build time — relative dates are frozen
- **Fix:** Move date formatting to a client-side `<script>` that runs on page load, or switch to absolute date format

### 2.6 Fix color contrast for muted text
- **File:** `src/styles/global.css`
- **Issue:** `--text-muted: #78869b` on white = ~3.8:1 contrast (fails WCAG AA)
- **Fix:** Darken to at least `#637085` (~4.6:1) or similar

---

## Phase 3: Code Quality & DRY

### 3.1 Extract shared `folderMap` constant
- **Files:** `src/pages/[folder]/index.astro`, `src/pages/[folder]/[slug].astro`
- **Issue:** Identical `folderMap` defined in two files
- **Fix:** Create `src/lib/folders.ts` with the shared constant and import it

### 3.2 Extract shared sort utility
- **Files:** `MessageList.astro`, `[slug].astro`
- **Issue:** Same pinned-first + date-desc sort logic duplicated
- **Fix:** Add a `sortMessages()` helper to `src/lib/folders.ts`

### 3.3 Remove `any` casts — use proper collection types
- **Files:** `[folder]/index.astro`, `[folder]/[slug].astro`, `logs/index.astro`
- **Issue:** `let items: any[]` defeats TypeScript
- **Fix:** Use Astro's `CollectionEntry<'inbox'>` types or a union type

### 3.4 Replace `window as any` globals with CustomEvents
- **Files:** `FormModal.astro`, `EmailLayout.astro`, `ReadingPane.astro`
- **Issue:** `(window as any).__formModal_*` is untyped global pub/sub
- **Fix:** Use `document.dispatchEvent(new CustomEvent('form-modal:open', { detail: { id } }))` pattern

### 3.5 Remove inline `onclick` from Sidebar links
- **File:** `src/components/Sidebar.astro`
- **Issue:** Inline JS string handlers mixed with component model
- **Fix:** Move to `<script>` event delegation

### 3.6 Remove duplicate expanded-mode CSS rules
- **Files:** `EmailLayout.astro`, `ReadingPane.astro`
- **Issue:** `html[data-expanded] .msg-list` and `.reading-pane` rules duplicated
- **Fix:** Keep only in `EmailLayout.astro` (parent scope) or move to `global.css`

---

## Phase 4: SEO & Discoverability

### 4.1 Add `og:url` meta tag
- **File:** `src/layouts/EmailLayout.astro`
- **Fix:** Add `<meta property="og:url" content={Astro.url.href} />`

### 4.2 Add canonical URL to all pages
- **File:** `src/layouts/EmailLayout.astro`
- **Fix:** Add `<link rel="canonical" href={Astro.url.href} />`

### 4.3 Add `robots.txt`
- **Location:** `public/robots.txt`
- **Fix:** Create with `User-agent: *` / `Allow: /` / `Sitemap:` reference

### 4.4 Add sitemap
- **Fix:** Install `@astrojs/sitemap`, add to `astro.config.mjs` with `site` URL

### 4.5 Add RSS feed
- **Fix:** Install `@astrojs/rss`, create `src/pages/rss.xml.ts` endpoint

---

## Phase 5: Performance & Best Practices

### 5.1 Add `dist/` to `.gitignore`
- **File:** `.gitignore`
- **Issue:** Build output inflates repo, creates noisy diffs
- **Fix:** Add `dist/` to gitignore, remove tracked dist files

### 5.2 Add SRI or self-host Sveltia CMS
- **File:** `src/pages/admin.astro`
- **Fix:** Pin version + add integrity hash, or vendor the script locally

### 5.3 Use Astro `<Image>` for log images
- **Files:** `src/pages/logs/index.astro`, `src/pages/logs/[slug].astro`
- **Fix:** Use Astro's built-in `<Image>` component for automatic optimization, responsive `srcset`

### 5.4 Centralize Formspree endpoint
- **Fix:** Define `FORMSPREE_URL` in a single config file (`src/lib/config.ts`) and import everywhere

### 5.5 Dynamic avatar initial from `from` prop
- **File:** `src/components/ReadingPane.astro`
- **Fix:** Replace hardcoded `S` with `{from.charAt(0).toUpperCase()}`

### 5.6 Improve search bar accessibility
- **File:** `src/components/Toolbar.astro`
- **Fix:** Add `aria-disabled="true"` and a `title="Search coming soon"` to the input

---

## Execution Order

| Step | Phase | Est. Impact |
|------|-------|-------------|
| 1 | Phase 1 (Critical) | Security + correctness |
| 2 | Phase 2 (Medium) | Bug fixes + robustness |
| 3 | Phase 3 (Code Quality) | Maintainability |
| 4 | Phase 4 (SEO) | Discoverability |
| 5 | Phase 5 (Performance) | Polish + best practices |

Each phase can be committed independently. Phase 1 should be done first.
