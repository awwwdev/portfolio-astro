---
title: "Do not put `<a/>` in `<a>`"
tags:
- about-me # references `src/content/blog/about-me.md`
- my-year-in-review # references `src/content/blog/my-year-in-review.md`
---


# Don't put `<a />` in `<a />` 

It seems obvious but happens a lot in when making card components. 

Bad Example: 

```html
<a href='/products/spoon'>
<img />
<div >
  <h3 >Spoon</h3>
  <p> ... </p>
  <a href='/products/spoon'>Learn More</a>
  <button >Buy</button>

</div>
</a>
```

Suggestion: 

```html

<div>
  <a href='/products/spoon'>
    <img />
  </a>
  <div >
    <h3 >Spoon</h3>
    <p> ... </p>
    <a href='/products/spoon'>Learn More</a>
    <button>Buy</button>
  </div>
</div>
```