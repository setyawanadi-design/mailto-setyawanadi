---
title: "Owner's Guide — How to manage this site"
from: "setyawanadi"
fromEmail: "setyawanadi@hotmail.com"
date: 2026-03-13
preview: "A complete guide for managing content, adding posts, working with images, and keeping the site updated..."
pinned: true
---

This post serves as a reference guide for managing and updating this site. Everything you need to know about the content structure, adding new posts, and maintaining the design is documented here.

![Site dashboard overview](https://picsum.photos/seed/dashboard/800/400)

## Content Structure

All content lives in the `src/content/` directory. Each folder maps to a mail folder in the sidebar:

| Folder | Purpose | Route |
|--------|---------|-------|
| `inbox/` | Blog posts, thoughts, updates | `/inbox/[slug]` |
| `sent/` | Projects and shipped work | `/sent/[slug]` |
| `drafts/` | Work in progress | `/drafts/[slug]` |
| `notes/` | Personal info, about page | `/notes/[slug]` |
| `archive/` | Older content, past roles | `/archive/[slug]` |
| `starred/` | Featured/pinned content | `/starred/[slug]` |
| `logs/` | Short timeline posts | `/logs` (feed view) |

## Creating a New Post

Every post is a Markdown file with frontmatter. Here's the template:

```markdown
---
title: "Your Post Title"
from: "setyawanadi"
fromEmail: "setyawanadi@hotmail.com"
date: 2026-03-13
preview: "A short preview shown in the message list..."
pinned: false
---

Your content goes here.
```

### Required fields

1. **title** — The email subject line displayed in the reading pane
2. **from** — Sender name shown in the message list (use `setyawanadi`)
3. **fromEmail** — Sender email address
4. **date** — Publication date in `YYYY-MM-DD` format
5. **preview** — Short excerpt shown in the message list

### Optional fields

- **pinned** — Set to `true` to pin the post to the top of the folder
- **attachments** — Array of file attachments with `name`, `url`, and `size`

## Working with Images

Images can be added inline using standard Markdown syntax:

```markdown
![Alt text description](https://your-image-url.com/image.jpg)
```

![Example workspace photo](https://picsum.photos/seed/workspace/800/450)

For best results:

- Use landscape images (16:9 or 4:3 ratio)
- Keep file sizes under 500KB for fast loading
- Always include descriptive alt text for accessibility
- Images automatically get rounded corners from the design system

## Markdown Features

This site supports the full range of Markdown formatting. Here's what's available:

### Text Formatting

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- `Inline code` for technical terms
- [Links](https://astro.build) with hover states
- ~~Strikethrough~~ for corrections

### Code Blocks

```javascript
// Example: fetching content collections
const items = await getCollection('inbox');
const sorted = items.sort((a, b) =>
  new Date(b.data.date) - new Date(a.data.date)
);
```

### Blockquotes

> Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects, and the products are not burdened with non-essentials.
> — Dieter Rams

### Tables

Tables are useful for structured comparisons:

| Feature | Status | Notes |
|---------|--------|-------|
| Markdown rendering | Done | Full GFM support |
| Image support | Done | Auto-rounded corners |
| Table styling | Done | Hover states included |
| Code highlighting | Done | Dark theme code blocks |
| Reply modal | Done | Formspree integration |
| CMS integration | Planned | Sveltia CMS |

## Deployment Checklist

When deploying updates, follow this process:

1. Write or edit content in `src/content/`
2. Preview locally with `npm run dev`
3. Check that images load and tables render correctly
4. Verify the message list shows correct previews
5. Run `npm run build` to generate the static site
6. Deploy to Netlify (auto-deploys from main branch)

## File Naming

Use kebab-case for all content files:

| Good | Bad |
|------|-----|
| `site-owner-guide.md` | `Site Owner Guide.md` |
| `my-new-project.md` | `myNewProject.md` |
| `field-operations.md` | `Field_Operations.md` |

The filename becomes the URL slug, so `site-owner-guide.md` in the inbox folder becomes `/inbox/site-owner-guide`.
