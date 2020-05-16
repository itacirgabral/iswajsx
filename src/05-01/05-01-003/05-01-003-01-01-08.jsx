import React from "react";

const SvgComponent = (props) => (
  <svg width={53} height={9} {...props}>
    <path d="M0 4h42v4H0V4zM53 0v7.071h-1.016V1.016h-6.055V0H53z" />
    <path d="M51.586 4.243l-.707-.707-4.243 4.242.707.707 4.243-4.242zM49.464 2.121l-.707-.707-4.242 4.243.707.707 4.242-4.243z" />
  </svg>
);

export default SvgComponent;
