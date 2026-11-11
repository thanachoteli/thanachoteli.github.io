# Writing and managing blog posts

Blog posts are Markdown files that Jekyll turns into pages. The blog index, topic filters, and date sorting are generated from the files in `_posts/`.

## Add a post

Create a file in `_posts/` named `YYYY-MM-DD-short-title.md`, for example `2026-11-06-a-walk-with-my-camera.md`. Start it with front matter like this:

```yaml
---
layout: post
title: "A walk with my camera"
date: 2026-11-06 10:00:00 +0700
categories: photography
description: "A short summary shown on the blog index."
---
```

Write the article below the second `---` using Markdown. Use one category: `technology`, `photography`, or `personal`. That category controls the sidebar filter and the label shown with the post. Jekyll orders the index by the post date; the page also lets readers switch between most recent and oldest first.

## Write equations

Use `$...$` for inline math within a sentence, such as:

```markdown
Euler's identity is $e^{i\pi} + 1 = 0$.
```

Use `$$...$$` on separate lines for a centered display equation:

```markdown
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$
```

MathJax renders the equations in the browser. It loads from a CDN, so readers need an internet connection for the formatted math; without it, they will still see the TeX source.

## Remove a post

Delete its `.md` file from `_posts/`. Jekyll will remove both the article page and its entry in the blog index on the next Pages build.

GitHub Pages builds Jekyll automatically when the repository is published from a branch. In the repository's **Settings → Pages**, the source should be the branch and folder that contain these files (usually the main branch and `/(root)`).
