---
title: "Font Audit Typography Stress Test"
date: 2026-03-16
category: inbox
pinned: false
tags: ["audit", "typography", "design", "ux", "mobile"]
---

This post exists to stress-test every typographic element across desktop and mobile. Scroll through and check how everything feels — especially on your phone.

## Headings at every level

### This is an h3 heading

Body text right after a heading. Notice the spacing above and below. Does it feel balanced? Is there enough breathing room between the heading and the paragraph?

## Lists — ordered and unordered

Here's an unordered list of things to check:

- Does the font size feel readable on mobile without squinting?
- Are the line heights comfortable for long reading sessions?
- Do bullet points have enough padding from the left edge?
- What about list items that wrap to a second line — like this one does intentionally because it contains a longer sentence that should definitely wrap on most screen sizes?
- Short item
- Another short one

And an ordered list:

1. First check the message list preview text
2. Then check the date labels and tag pills
3. Look at the reading pane body text
4. Check the signature area at the bottom
5. Test the action buttons and their labels
6. Scroll through and see if anything feels cramped
7. Pay attention to the spacing between paragraphs
8. Notice how bold and italic text sits within the flow
9. Check code snippets inline and in blocks
10. Finally review the overall visual hierarchy

## Inline formatting

Here's a paragraph with **bold text** and *italic text* and even ***bold italic*** mixed together. Sometimes you need `inline code` within a sentence to reference a variable like `--font-size-xs` or a function name like `formatDateRelative()`. Does the code font size feel proportional to the surrounding text?

Here's another paragraph. This one is just plain body text with no formatting at all. It's meant to simulate a normal email or blog post paragraph. Read through it and see if the font size, line height, and letter spacing all feel comfortable. On mobile, you should be able to read this without any strain. If you find yourself squinting or leaning in, the font size might be too small. The goal is effortless readability at a natural holding distance.

## Blockquotes

> This is a blockquote. It's styled with a left border and slightly muted color. On mobile, does the text inside the blockquote feel readable? Does the padding from the left border feel right?

> Here's a longer blockquote that spans multiple lines. The purpose is to see how the italic styling and reduced color contrast hold up on a small screen. If the muted color is too light on mobile, it could hurt readability — especially in bright outdoor conditions where screen contrast drops.

## Code blocks

Here's a code block to check monospace sizing:

```
:root {
  --font-size-xs: 0.6875rem;   /* 11px */
  --font-size-sm: 0.75rem;     /* 12px */
  --font-size-base: 0.8125rem; /* 13px */
  --font-size-md: 0.875rem;    /* 14px */
  --font-size-lg: 1rem;        /* 16px */
  --font-size-xl: 1.125rem;    /* 18px */
  --font-size-2xl: 1.5rem;     /* 24px */
}

@media (max-width: 768px) {
  :root {
    --font-size-xs: 0.8125rem;   /* 13px */
    --font-size-sm: 0.875rem;    /* 14px */
    --font-size-base: 0.9375rem; /* 15px */
    --font-size-md: 1rem;        /* 16px */
  }
}
```

## Tables

| Token | Desktop | Mobile | Delta |
|---|---|---|---|
| `--font-size-xs` | 11px | 13px | +2px |
| `--font-size-sm` | 12px | 14px | +2px |
| `--font-size-base` | 13px | 15px | +2px |
| `--font-size-md` | 14px | 16px | +2px |
| `--font-size-lg` | 16px | 16px | — |
| `--font-size-xl` | 18px | 18px | — |
| `--font-size-2xl` | 24px | 24px | — |

## Links and emphasis

Check out [this link style](#) within body text. And here's **[a bold link](#)** and *[an italic link](#)*. Do they all feel visually distinct from surrounding text?

## Long unbroken content

Here is a really long paragraph meant to test how body text handles extended reading on mobile. The whole point of this audit is to figure out whether the plus-two-pixel bump on mobile is enough or whether we need to push it further. Typography on mobile is tricky because you have competing concerns. You want information density so users don't have to scroll forever. But you also want readability so users don't strain their eyes. The sweet spot is usually around 15-16px for body text on mobile with a line height of about 1.5 to 1.7. Right now the body text uses font-size-md which is 14px on desktop and 16px on mobile. But a lot of secondary content uses font-size-sm and font-size-xs which are 12px and 11px on desktop and 14px and 13px on mobile. That 13px on mobile for the smallest text is the one that might be pushing it. Think about date labels on messages or tag pills or the signature area. Those are all using the smallest sizes and they need to remain legible even in bright sunlight on a small phone screen. So the question is whether 13px is enough or whether we should bump the floor to 14px.

## Mixed content density

**From:** mailto.setyawanadi
**To:** visitor@visitor
**Date:** Mon, 03/16/2026, 14:30
**Subject:** Font Audit — Typography Stress Test
**Tags:** audit, typography, design, ux, mobile

---

The metadata block above simulates how dense information looks. Each label uses small text. On mobile, can you quickly scan the from/to/date/subject lines without difficulty?

## Another heading to break things up

### Subheading for good measure

Back to regular body text. This paragraph comes after two headings in a row. Check that the heading-to-heading and heading-to-body spacing feels intentional and not cramped.

Here's a final paragraph. If you made it this far, you have a good sense of how the typography holds up across a long read. The key areas to flag are: tag pills in the message list, date labels, the email signature, blockquote readability, and code block sizing. Everything else should be solid at the current scale.
