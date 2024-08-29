import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {


  /*Orange */
  --color-orange-100: #ffedd5;
  --color-orange-200: rgba(255,232,199,0.5);
  --color-orange-300: #fdba74;
  --color-orange-400: #fb923c;
  --color-orange-500: #CA8D5C;
  --color-orange-600: #E39859;
  --color-orange-700: #d97706;
  --color-white:#fff;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  html {
  line-height: 1.15; /* 1 */

  font-size:18px;
}

body {
  margin: 0;
  width:100%;
  font-family:lato, sans-serif;
  color: var(--color-grey-700);
  min-height: 100vh;
  /* min-width:1300px; */
  line-height: 1.5;
  transition: color 0.3s, background-color 0.3s;
  /* padding:0 16px; */
}
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}
button:has(svg) {
  line-height: 0;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}



small {
  font-size: 80%;
}



sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}


img {
  border-style: none;
}


button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}



button,
input { /* 1 */
  overflow: visible;
}



button,
select { /* 1 */
  text-transform: none;
}



button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}



button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}



button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}



fieldset {
  padding: 0.35em 0.75em 0.625em;
}



legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}



progress {
  vertical-align: baseline;
}



textarea {
  overflow: auto;
}



[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}


[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}



[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}



[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}


::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}



details {
  display: block;
}



summary {
  display: list-item;
}


template {
  display: none;
}



[hidden] {
  display: none;
}
img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
 }
 input,
button,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-orange-400);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
 
}

ul {
  list-style: none;
  padding:0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

  // Light Mode 
  &,&.light-mode{
  --color-grey-0: #fff;
  --color-grey-50: #F4F5F6;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-orange-50: #ffedd5;
  --color-orange-500: #fda45e;
  --color-orange-700: #d97706;
  --color-green-50: #dcfce7;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-brown-50: #FFE3CC;
  --color-brown-700: #9A8775;
  --color-yellow-50: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-blue-100: #FFE3CC;

  --color-orange-200: rgba(255,232,199,0.5);

  --color-red-100: #fee2e2;
  --color-red-700: #EB4C42;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  --image-grayscale: 0;
  --image-opacity: 100%;
 }


//Dark Mode

&.dark-mode{
  --color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-orange-100: #FFE0CD;

--color-brown-50: #9A8775;
--color-brown-700: #D8E1ED;
--color-orange-700: #e0f2fe;
--color-orange-50: #CA8D5C;
--color-orange-500: #fda45e;
--color-green-100: #829A6B;
--color-green-50: #8F9276;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-50: #E1AC5F;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-50: #374151;
--color-silver-700: #f3f4f6; 
--color-blue-100: #8DA399;
--color-blue-700: #C1FCE7; 

--color-red-100: #fee2e2;
--color-red-700: #EB4C42;
--color-red-800: #991b1b;
--color-orange-200: rgb(255,232,199);
--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;

 }  
}`;

export default GlobalStyles;
