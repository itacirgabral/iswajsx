import React from "react";

const SvgComponent = (props) => (
  <svg width={60} height={16} {...props}>
    <path d="M0 12h42V8H0v4zM53 0h-7.071v1.016h6.055v6.055H53V0z" />
    <path d="M48.757 1.414l.707.707-4.242 4.243-.707-.707 4.242-4.243zM50.879 3.536l.707.707-4.243 4.242-.707-.707 4.243-4.242zM60 7h-7.071v1.016h6.055v6.055H60V7z" />
    <path d="M55.757 8.414l.707.707-4.242 4.243-.707-.707 4.242-4.243zM57.879 10.536l.707.707-4.243 4.242-.707-.707 4.243-4.242z" />
  </svg>
);

export default SvgComponent;
