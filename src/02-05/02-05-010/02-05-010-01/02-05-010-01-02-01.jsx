import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={18} {...props}>
    <path d="M7 0L0 7h14L7 0zm0 1.438L11.563 6H2.437L7 1.437zM6 7v11h13V7h-2v9H8V7H6z" />
    <path d="M7 1.438L2.437 6h9.126L7 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
