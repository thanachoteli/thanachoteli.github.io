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

## Remove a post

Delete its `.md` file from `_posts/`. Jekyll will remove both the article page and its entry in the blog index on the next Pages build.

GitHub Pages builds Jekyll automatically when the repository is published from a branch. In the repository's **Settings → Pages**, the source should be the branch and folder that contain these files (usually the main branch and `/(root)`).
