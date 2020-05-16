import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={8} {...props}>
    <path d="M0 8h7.071V6.984H1.016V.929H0V8z" />
    <path d="M3.182 5.525l4.243-4.243-.707-.707-4.243 4.243.707.707z" />
  </svg>
);

export default SvgComponent;
