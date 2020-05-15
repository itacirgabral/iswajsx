import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 11h42v4H0v-4zM56 7v7.071h-1.016V8.016h-6.055V7H56z" />
    <path d="M53.525 10.182l-.707-.707-4.243 4.243.707.707 4.243-4.243zM49 0v7.071h-1.016V1.016h-6.055V0H49z" />
    <path d="M46.525 3.182l-.707-.707-4.243 4.243.707.707 4.243-4.243z" />
  </svg>
);

export default SvgComponent;