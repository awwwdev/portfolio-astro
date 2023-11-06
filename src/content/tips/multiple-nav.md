---
title: 'Multiple `<nav/>` elements'
tags: 
  - 'html'
  - 'accessiblity'
---




You can use multiple nav elements in your page or app. But make sure to put and id for each `<nav/>` elements.

- `<nav id='primary'>` is pronounced by screen readers like "Primary Navigation". So don't do `<nav id='primary-navigation'>`.

Example: 

```html
<html>
  <head>...</head>
  <body>
    <header>...</header>
    <nav id='primary'>...</nav>
    <main>
      <div>
         <nav id='breadcrumb'>...</nav>
      <div>
        <!-- Page Content -->
      </div>
    </main>
    <aside>
      <nav id='side'>...</nav>
    </aside>
    <footer>
      <nav id='footer'>...</nav>
    </footer>
  </body>
</html> 
```

[Also don't put `<nav />` in the header.](/tips/nav-out-of-header)