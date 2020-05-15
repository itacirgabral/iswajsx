import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 11h42v4H0v-4zM44 7v7.071h1.016V8.016h6.055V7H44z" />
    <path d="M46.475 10.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM51 0v7.071h1.016V1.016h6.055V0H51z" />
    <path d="M53.475 3.182l.707-.707 4.243 4.243-.707.707-4.243-4.243z" />
  </svg>
);

export default SvgComponent;