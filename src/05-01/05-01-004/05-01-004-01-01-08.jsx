import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 5h42v4H0V5zM52 0v7.071h-1.016V1.016h-6.055V0H52z" />
    <path d="M49.525 3.182l-.707-.707-4.243 4.243.707.707 4.243-4.243z" />
  </svg>
);

export default SvgComponent;
