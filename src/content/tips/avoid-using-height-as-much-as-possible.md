---
title: "Avoid using `height` AMAP"
tags:
- css
- layout
- responsiveness
---

A 3 lines pragraph could be 5 lines in a smaller screen. You need to allow element's height to be automatically calculated.

If you do `height: 5rem` your text might need more height in a smaller screen and text overflows (goes out of the element box).

Note browsers don't clip or hide overflown text, since they protrise accessing to content over aesthetics.

Suggestions:

Use `min-height` instead to allow element increase height when needed.

Use `height` when you are sure your content don't overflow in samller screen.