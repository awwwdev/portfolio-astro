---
title: "Put `<nav/>` out of  `<header/>`"
---


Don't put main `<nav>` in the `<header/>`. So users with screen Readers can find it faster.

When `<nav/>` in a `<header/>` element, they don't know there is nav unless they check what is inside the `<header/>` element.

Note `<nav/>` like `<header />`, `<nav/>`, `<nav/>` and `<nav/>` has regional role. therfore, doesn't neccessarily need to be wrap in a `<header/>`. Although it's valid if you put it in the `<header/>` element.

Also always add `id='primary'` attribute to your primary `<nav/>` if you have [multiple `<nav/>` elements](/tips/multiple-nav-elements).