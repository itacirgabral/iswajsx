import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 10h42V6H0v4zM52 15.016h-7.071V14h6.055V7.945H52v7.071z" />
    <path d="M47.757 13.602l.707-.707-4.242-4.242-.707.707 4.242 4.242zM49.879 11.48l.707-.706-4.243-4.243-.707.707 4.243 4.243zM48.984 0h7.07v1.016H50v6.055h-1.016V0z" />
    <path d="M53.226 1.414l-.707.707 4.243 4.243.707-.707-4.243-4.243zM51.105 3.536l-.707.707 4.242 4.242.707-.707-4.242-4.242z" />
  </svg>
);

export default SvgComponent;
