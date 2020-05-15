import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M53 4H11v4h42V4zM0 0v7.071h1.016V1.016h6.055V0H0z" />
    <path d="M1.414 4.243l.707-.707 4.243 4.242-.707.707-4.243-4.242zM3.536 2.121l.707-.707 4.242 4.243-.707.707-4.242-4.243z" />
  </svg>
);

export default SvgComponent;
