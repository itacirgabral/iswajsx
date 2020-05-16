import React from "react";

const SvgComponent = (props) => (
  <svg width={53} height={9} {...props}>
    <path d="M0 4h42v4H0V4zM44 0v7.071h1.016V1.016h6.055V0H44z" />
    <path d="M45.414 4.243l.707-.707 4.243 4.242-.707.707-4.243-4.242zM47.536 2.121l.707-.707 4.242 4.243-.707.707-4.242-4.243z" />
  </svg>
);

export default SvgComponent;
