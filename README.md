This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](/images/final-screenshot.png)

### Links

- [Solution Repository](https://github.com/humbruno/signup-form)
- [Live Site URL](https://humbruno.github.io/signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- JavaScript
- Mobile-first workflow

### What I learned

The styling side of this challenge was rather straightforward, despite requiring some extra thinking to display the error icon for empty or incorrect fields.

I did run into an issue where the input background color is changed by the browser's autocomplete function and after doing some research, there doesn't seem to exist a native workaround this yet.

It was also a great practice for my JavaScript skills and helped me get into the habit of deconstructing a big solution into smaller, more manageable solutions.
