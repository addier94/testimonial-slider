# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![preview](./desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript for dynamic content

### What I learned

while working on this project, i learned how to dynamically create and update elements using JavaScript to implement a slider. Here are some code snippets demonstrating key concepts:

Creating add appending new elements:

```js
const slides = document.getElementById("slides");

data.forEach((_, index) => {
  const div = document.createElement("div");
  div.classList.add("doc");
  slides.appendChild(div);
});
```

Updating content dynamically:

```js
const updateTestimonial = (index) => {
  imgElement.src = data[index].image;
  testimonialText.textContent = data[index].text;
  name.textContent = data[index].name;
  role.textContent = data[index].role;

  const indicators = document.querySelectorAll(".doc");
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("active__doc");
    } else {
      indicator.classList.remove("active__doc");
    }
  });
};
```

### Continued development

In future projects, I want to continue focusing on improving my JavaScript skills, particularly in creating dynamic and interactive content. Additionally, I plan to explore more advanced CSS techniques to enhance the visual appeal and responsiveness of my web projects.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - This resource is invaluable for undestanding web development concepts
- [CSS-Tricks](https://css-tricks.com/) - This site has great tutorials and examples on CSS and fronted development

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@addier94](https://www.twitter.com/addier94)

## Acknowledgments

I want to thank the Fronted Mentor community for providing such engagin challenges and the helpful discussions on the forums. The collective knowledge and support have been invaluable in completing this project.
