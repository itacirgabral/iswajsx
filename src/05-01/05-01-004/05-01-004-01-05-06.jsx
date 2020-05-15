import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M42 4H0V0h42v4zM58 8V.929h-1.016v6.055h-6.055V8H58z" />
    <path d="M55.525 4.818l-.707.707-4.243-4.243.707-.707 4.243 4.243zM43 5v7.071h1.016V6.016h6.055V5H43z" />
    <path d="M45.475 8.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM46 20v-7.071h-1.016v6.055h-6.055V20H46z" />
    <path d="M43.525 16.818l-.707.707-4.243-4.243.707-.707 4.243 4.243z" />
  </svg>
);

export default SvgComponent;
