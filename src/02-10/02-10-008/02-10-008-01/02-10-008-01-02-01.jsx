import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={7} {...props}>
    <path d="M6.5.5L0 7h13L6.5.5zm0 1.406L10.563 6H2.437L6.5 1.906z" />
    <path d="M6.5 1.906L2.437 6h8.126L6.5 1.906z" fill="#fff" />
  </svg>
);

export default SvgComponent;
