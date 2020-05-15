import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 4h42V0H16v4zM0 8V.929h1.016v6.055h6.055V8H0z" />
    <path d="M2.475 4.818l.707.707 4.243-4.243-.707-.707-4.243 4.243zM15 5v7.071h-1.016V6.016H7.929V5H15z" />
    <path d="M12.525 8.182l-.707-.707-4.243 4.243.707.707 4.243-4.243zM12 20v-7.071h1.016v6.055h6.055V20H12z" />
    <path d="M14.475 16.818l.707.707 4.243-4.243-.707-.707-4.243 4.243z" />
  </svg>
);

export default SvgComponent;
