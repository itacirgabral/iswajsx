import React from "react";

const SvgComponent = (props) => (
  <svg width={60} height={16} {...props}>
    <path d="M0 11h42v4H0v-4zM44 7v7.071h1.016V8.016h6.055V7H44z" />
    <path d="M45.414 11.243l.707-.707 4.243 4.242-.707.707-4.243-4.242zM47.536 9.121l.707-.707 4.242 4.243-.707.707-4.242-4.243zM51 0v7.071h1.016V1.016h6.055V0H51z" />
    <path d="M52.414 4.243l.707-.707 4.243 4.242-.707.707-4.243-4.242zM54.536 2.121l.707-.707 4.242 4.243-.707.707-4.242-4.243z" />
  </svg>
);

export default SvgComponent;
