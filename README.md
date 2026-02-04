# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device’s screen size
- See hover states for all interactive elements
- Select and submit a number rating
- See a “Thank you” state after submitting a rating

### Links

- Solution URL: https://www.frontendmentor.io/solutions/interactive-rating-component-i8ZrcwUWtq
- Live Site URL: https://cosmonautkc.github.io/turbo-disco/

## My process

### Built with

- Semantic HTML5
- CSS custom properties (design tokens)
- Flexbox & Grid
- Mobile-first workflow
- Vanilla JavaScript
- ARIA attributes

### What I learned

This project was mainly about **repeating and reinforcing JavaScript basics**, rather than trying to learn new advanced concepts.

Key things I worked on:

- **DOM selection and events**  
  I used `querySelector`, `addEventListener`, and form submission handling to control the UI state.

- **Updating content dynamically**  
  I used `textContent` to insert the selected rating into the thank-you message, which I hadn’t used much before.

- **State switching with attributes**  
  I toggled between the rating state and thank-you state using `aria-hidden` and CSS, instead of JavaScript-heavy logic.

- **Styling radio buttons accessibly**  
  I hid the native radio inputs and styled their labels, using `:has(input:checked)` for visual feedback.

- **Choosing simple solutions over clever ones**  
  Instead of using pseudo-elements for icon backgrounds, I wrapped images in a `<span>` to keep things predictable and readable. I had tried to use psuedo elements to drill the understanding in regardless of efficiency but as I am confident, I decided to refactor parts of my code.

- **Using `clamp()` practically**  
  I used `clamp()` for things like border-radius to make the component scale nicely without overthinking it.

- **ARIA awareness (with room to improve)**  
  I used ARIA attributes even though I know they’re not perfectly applied yet. This helped highlight accessibility as something to improve in future projects.

### Continued development

In future projects, I want to:

- Revisit ARIA usage and understand how to use it to descibe state instead of be the state
- Explore different ways of structuring JS, while still keeping things simple
- Keep reinforcing core concepts of JS
- Get more confident explaining why I write code a certain way using jargon

## Author

- Frontend Mentor – [@cosmonautkc](https://www.frontendmentor.io/profile/cosmonautkc)
