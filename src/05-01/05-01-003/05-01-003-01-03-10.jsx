import React from "react";

const SvgComponent = (props) => (
  <svg width={60} height={14} {...props}>
    <path d="M60 10H18V6h42v4zM0 9h7.071V7.984H1.016V1.929H0V9z" />
    <path d="M4.243 7.586l-.707-.707 4.242-4.243.707.707-4.242 4.243zM2.121 5.464l-.707-.707L5.657.515l.707.707-4.243 4.242zM16 5H8.929v1.016h6.055v6.055H16V5z" />
    <path d="M11.757 6.414l.707.707-4.242 4.243-.707-.707 4.242-4.243zM13.879 8.536l.707.707-4.243 4.242-.707-.707 4.243-4.242z" />
  </svg>
);

export default SvgComponent;
