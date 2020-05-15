import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M56 11H14v4h42v-4zM0 7v7.071h1.016V8.016h6.055V7H0z" />
    <path d="M2.475 10.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM7 0v7.071h1.016V1.016h6.055V0H7z" />
    <path d="M9.475 3.182l.707-.707 4.243 4.243-.707.707-4.243-4.243z" />
  </svg>
);

export default SvgComponent;
