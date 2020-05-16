import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={26} {...props}>
    <path d="M9 0L2 7h14L9 0zm0 1.438L13.563 6H4.437L9 1.437zM8 7v11.188l-8-8V26h2V15l8 8V7H8z" />
    <path d="M9 1.438L4.437 6h9.125L9 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
