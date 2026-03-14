---
title: "Getting started: everything you can do here"
from: "setyawanadi"
fromEmail: "setyawanadi@hotmail.com"
date: 2026-03-14
preview: "A complete guide to writing on your site — posts, logs, images, tags, and all the tricks you might not know about..."
pinned: false
tags: ["guide", "dev"]
---

So you've got this site up and running. Now what? Here's everything you can do with it.

## Writing posts (like this one)

Every post is a simple markdown file in `src/content/inbox/`. Create a new `.md` file and add frontmatter at the top:

```
---
title: "Your post title"
from: "setyawanadi"
fromEmail: "setyawanadi@hotmail.com"
date: 2026-03-14
preview: "A short preview that shows up in the message list..."
tags: ["whatever", "you-want"]
---

Your content goes here.
```

That's it. Save the file, and it shows up in the inbox.

## Formatting

You've got full **markdown** support:

- **Bold** and *italic* text
- [Links](https://example.com) to anywhere
- `inline code` and code blocks
- Lists (like this one)
- Headings, blockquotes, horizontal rules — the usual

## Images

Drop images right into your markdown:

```
![Alt text](https://your-image-url.com/photo.jpg)
```

Stack multiple images together and they'll automatically form a **photo grid** (like Facebook/Instagram):

- **2 images** → side by side
- **3 images** → one large + two small

Just put them on consecutive lines with no text in between.

## Tags

Tags are completely flexible — just add any strings you want:

```
tags: ["thoughts", "dev", "bits-of-life", "new-tag"]
```

No config needed. They show up as little pills in the message list. Use them however you want — by topic, by mood, by project.

## Folders

Your site has multiple folders, just like a real email client:

- **Inbox** → your main blog posts, what visitors see first
- **Sent** → things you've put out into the world (applications, projects, portfolios)
- **Notes** → private-ish stuff, about me, references
- **Archive** → older content you want to keep but not feature
- **Starred** → highlighted/featured posts

Each folder is a directory under `src/content/`. Same frontmatter format, same markdown. Just drop a file in the right folder.

## Logs

Logs are different — they're short, casual, social-media-style posts. Think tweets or status updates.

Create a file in `src/content/logs/`:

```
---
title: "your log title"
date: 2026-03-14
---

your thoughts here. keep it short and real.
```

Logs support images too (just use markdown images in the body). They show up in a seamless feed with relative dates ("2 days ago", "1 month ago").

## Attachments

Posts can have file attachments:

```
attachments:
  - name: "my-resume.pdf"
    url: "/files/resume.pdf"
    size: "2.4 MB"
```

They show up as downloadable files at the bottom of the post.

## Pinning

Want a post to always stay at the top of a folder? Add `pinned: true` to the frontmatter. It'll get a little star icon and stick to the top of the list.

## What visitors can do

- **Reply** to any post — opens a contact form (powered by Formspree)
- **Forward** posts — opens the native share sheet on mobile, copies the link on desktop
- **Browse images** — clicking any image opens a full-screen lightbox with arrow navigation
- **Dark mode** — toggles via the icon in the toolbar, defaults to system preference

## Tips

- Keep previews under ~120 characters so they don't get cut off in the message list
- Dates determine sort order — newer posts appear first
- File names become URL slugs (`my-post.md` → `/inbox/my-post`)
- You don't need to restart the dev server when adding new content files
- Logs with images get automatic Open Graph tags when shared on social media

That's everything. Start writing.
