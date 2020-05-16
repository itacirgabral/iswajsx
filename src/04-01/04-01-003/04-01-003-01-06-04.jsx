import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={9} {...props}>
    <path d="M0 9h7.071V7.984H1.016V1.929H0V9z" />
    <path d="M2.121 5.464l4.243-4.242-.707-.707-4.243 4.242.707.707zM4.243 7.586l4.242-4.243-.707-.707-4.242 4.243.707.707z" />
  </svg>
);

export default SvgComponent;
