# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./design/mobile-design.jpg)
![](./design/desktop-design.jpg)

### Links

- Solution URL: [Github](https://github.com/jeremylloyd/Interactive-card-details-form)
- Live Site URL: [Github Pages](https://jeremylloyd.github.io/Interactive-card-details-form/)

## My process

### Built with

- HTML
- CSS
- JS

### What I learned

- The `id` HTML attribute makes it super easy to select the element in JS
- The `.validity` attribute is super useful for form input validation:
  - `element.validity.valueMissing` tells you if an input is blank
  - `element.validity.badInput` tells you if the user input matches the input `type` you specified in your HTML
  - `element.validity.rangeOverflow` and `element.validity.rangeUnderflow` tells you if the user input is outside the range specified by `min` and `max` in your HTML
- Adding/removing classes is a simple way to make complex appearance changes in JS
  - I used the `.selected` class to only validate form inputs after the user has clicked them
  - Keeping class names relatively short is the way to go. `warning-invalid` felt long when combined with other class names in the HTML
- Installing the prettier linter in VScode helps teach me (a beginner) best JS practices as I go
  - 2 space indents
  - for/if blocks shouldn't go on a single line, even if they're short
- There's no simple way to do a gradient border/outline in CSS
- HTML's default validation won't get you far if you want to control exactly how the user interacts with your website - adding a JavaScript function to validate whenever the user submits a form or deselects an input lets you do a whole lot more like adjusting other elements of the webpage, adjusting error messages depending on what the user did wrong, etc.
