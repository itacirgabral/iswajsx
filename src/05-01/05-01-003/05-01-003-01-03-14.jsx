import React from "react";

const SvgComponent = (props) => (
  <svg width={58} height={15} {...props}>
    <path d="M58 10H16V6h42v4zM6 15.016h7.071V14H7.016V7.945H6v7.071z" />
    <path d="M10.243 13.602l-.707-.707 4.242-4.242.707.707-4.242 4.242zM8.121 11.48l-.707-.706 4.243-4.243.707.707-4.243 4.243zM9.016 0h-7.07v1.016H8v6.055h1.016V0z" />
    <path d="M4.774 1.414l.707.707-4.243 4.243-.707-.707 4.243-4.243zM6.895 3.536l.707.707L3.36 8.485l-.707-.707 4.242-4.242z" />
  </svg>
);

export default SvgComponent;
