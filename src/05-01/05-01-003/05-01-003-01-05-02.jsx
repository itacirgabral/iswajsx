import React from "react";

const SvgComponent = (props) => (
  <svg width={58} height={21} {...props}>
    <path d="M0 5h42v4H0V5zM37 12v7.071h1.016v-6.055h6.055V12H37z" />
    <path d="M38.414 16.243l.707-.707 4.243 4.242-.707.707-4.243-4.242zM40.536 14.121l.707-.707 4.242 4.243-.707.707-4.242-4.243zM52 15.071V8h-1.016v6.055h-6.055v1.016H52z" />
    <path d="M50.586 10.828l-.707.708-4.243-4.243.707-.707 4.243 4.242zM48.464 12.95l-.707.707-4.242-4.243.707-.707 4.242 4.243zM49 0v7.071h1.016V1.016h6.055V0H49z" />
    <path d="M50.414 4.243l.707-.707 4.243 4.242-.707.707-4.243-4.242zM52.536 2.121l.707-.707 4.242 4.243-.707.707-4.242-4.243z" />
  </svg>
);

export default SvgComponent;
