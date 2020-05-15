import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M42 16H0v4h42v-4zM58 12v7.071h-1.016v-6.055h-6.055V12H58z" />
    <path d="M55.525 15.182l-.707-.707-4.243 4.243.707.707 4.243-4.243zM43 15V7.929h1.016v6.055h6.055V15H43z" />
    <path d="M45.475 11.818l.707.707 4.243-4.243-.707-.707-4.243 4.243zM46 0v7.071h-1.016V1.016h-6.055V0H46z" />
    <path d="M43.525 3.182l-.707-.707-4.243 4.243.707.707 4.243-4.243z" />
  </svg>
);

export default SvgComponent;
