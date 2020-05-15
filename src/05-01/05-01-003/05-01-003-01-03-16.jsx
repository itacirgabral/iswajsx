import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M60 9H18v4h42V9zM0 5h7.071v1.016H1.016v6.055H0V5z" />
    <path d="M4.243 6.414l-.707.707 4.242 4.243.707-.707-4.242-4.243zM2.121 8.536l-.707.707 4.243 4.242.707-.707-4.243-4.242zM16 9H8.929V7.984h6.055V1.929H16V9z" />
    <path d="M11.757 7.586l.707-.707-4.242-4.243-.707.707 4.242 4.243zM13.879 5.464l.707-.707L10.343.515l-.707.707 4.243 4.242z" />
  </svg>
);

export default SvgComponent;
