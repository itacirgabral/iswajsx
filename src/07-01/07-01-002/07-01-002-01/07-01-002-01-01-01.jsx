import React from "react";

const SvgComponent = (props) => (
  <svg width={72} height={14} {...props}>
    <path d="M0 6h72v8H0V6z" />
    <path d="M72 2H0v4h72V2z" fill="#fff" />
    <path d="M0 0v2h72V0H0z" />
  </svg>
);

export default SvgComponent;
