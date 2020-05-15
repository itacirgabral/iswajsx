import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M58 8H16v4h42V8zM6 0h7.071v1.016H7.016v6.055H6V0z" />
    <path d="M10.243 1.414l-.707.707 4.242 4.243.707-.707-4.242-4.243zM8.121 3.536l-.707.707 4.243 4.242.707-.707-4.243-4.242zM9.016 15.016h-7.07V14H8V7.945h1.016v7.071z" />
    <path d="M4.774 13.602l.707-.707-4.243-4.242-.707.707 4.243 4.242zM6.895 11.48l.707-.706L3.36 6.53l-.707.707 4.242 4.243z" />
  </svg>
);

export default SvgComponent;