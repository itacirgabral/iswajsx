import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v7.071h1.016V1.016h6.055V0H0z" />
    <path d="M2.475 3.182l4.243 4.243.707-.707-4.243-4.243-.707.707z" />
  </svg>
);

export default SvgComponent;
