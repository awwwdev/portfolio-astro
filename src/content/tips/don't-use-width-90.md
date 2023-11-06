---
title: "Don't use `width: 90%`"
tags:
- css
- layout
- responsiveness
---

Reltive width to parent is prone to responsivness issues.

To devid width between two elements use sujjestions below:

When you force how much space each element get, use `grid` and `grid-template-columns`.

When amount of content in each element determins how much space each element gets, use `flex`. Use `flex-wrap` if you want it to wrap.
