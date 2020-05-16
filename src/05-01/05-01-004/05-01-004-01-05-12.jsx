import React from "react";

const SvgComponent = (props) => (
  <svg width={58} height={19} {...props}>
    <path d="M58 17H16v-4h42v4zM19 8V.929h-1.016v6.055h-6.055V8H19z" />
    <path d="M16.525 4.818l-.707.707-4.243-4.243.707-.707 4.243 4.243zM5 5v7.071h1.016V6.016h6.055V5H5z" />
    <path d="M7.475 8.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM8 19v-7.071H6.984v6.055H.929V19H8z" />
    <path d="M5.525 15.818l-.707.707-4.243-4.243.707-.707 4.243 4.243z" />
  </svg>
);

export default SvgComponent;
