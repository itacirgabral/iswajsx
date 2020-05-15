import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M60 4H18v4h42V4zM7 16h7.071v-1.016H8.016V8.929H7V16z" />
    <path d="M11.243 14.586l-.707-.707 4.242-4.243.707.707-4.242 4.243zM9.121 12.464l-.707-.707 4.243-4.242.707.707-4.243 4.242zM0 9h7.071V7.984H1.016V1.929H0V9z" />
    <path d="M4.243 7.586l-.707-.707 4.242-4.243.707.707-4.242 4.243zM2.121 5.464l-.707-.707L5.657.515l.707.707-4.243 4.242z" />
  </svg>
);

export default SvgComponent;