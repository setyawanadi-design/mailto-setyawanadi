---
title: "The design system behind this site"
from: "setyawanadi"
fromEmail: "setyawanadi@hotmail.com"
date: 2026-03-11
preview: "A deep dive into the Frutiger Aero-inspired design tokens, color palette, and component architecture..."
tags: ["design", "dev"]
---

Every detail of this site is built on a small but intentional design system. Here's how it all fits together.

![Design system color palette](https://picsum.photos/seed/colors/800/350)

## Color Palette

The design draws from the **Frutiger Aero** aesthetic — soft gradients, glassy surfaces, and blue-sky warmth. Here's the core palette:

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `#0ea5e9` | Links, active states, buttons |
| `--bg-sidebar` | `#1e293b` | Sidebar background |
| `--bg-list` | `#ffffff` | Message list background |
| `--bg-detail` | `#fafbfc` | Reading pane background |
| `--text-primary` | `#0f172a` | Headings, strong text |
| `--text-detail` | `#334155` | Body text |
| `--text-muted` | `#94a3b8` | Dates, secondary info |
| `--border-subtle` | `#e2e8f0` | Dividers, card borders |

## Typography Scale

The site uses **Inter** as the primary typeface across all elements:

| Token | Size | Usage |
|-------|------|-------|
| `--font-size-xs` | 11px | Timestamps, labels |
| `--font-size-sm` | 13px | Previews, meta text |
| `--font-size-base` | 14px | Sidebar items |
| `--font-size-md` | 15px | Body text |
| `--font-size-lg` | 18px | Section headings |
| `--font-size-xl` | 22px | Page titles |

## Spacing System

Consistent spacing creates visual rhythm:

1. **4px** (`--spacing-xs`) — Tight gaps between related elements
2. **8px** (`--spacing-sm`) — Standard component padding
3. **12px** (`--spacing-md`) — Card internal spacing
4. **16px** (`--spacing-lg`) — Section gaps
5. **24px** (`--spacing-xl`) — Major section padding
6. **32px** (`--spacing-2xl`) — Page-level margins

## Component Architecture

The site is built with Astro components that compose together:

```
EmailLayout.astro
├── Toolbar.astro
├── Sidebar.astro
├── MessageList.astro (folder views)
└── ReadingPane.astro (content view)
    ├── Action bar (reply, forward, nav)
    ├── Post meta (from, to, date)
    ├── Email body (markdown content)
    ├── Signature (auto-generated)
    └── Reply modal (Formspree)
```

![Component architecture diagram](https://picsum.photos/seed/architecture/800/400)

## Responsive Breakpoints

The layout adapts across screen sizes:

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full three-panel layout |
| Tablet (768px–1023px) | Sidebar collapses, two panels |
| Mobile (< 768px) | Single panel, hamburger menu |

## Design Principles

Three rules guide every design decision:

1. **Familiarity over novelty** — The email client metaphor works because people already know how to use it. Don't fight that.
2. **Content density matters** — Show enough information to be useful without overwhelming. The message list preview is exactly two lines for a reason.
3. **Subtle depth** — Soft shadows, gentle gradients, and layered backgrounds create a sense of space without being heavy-handed.

> The best interface is one you already know how to use.
