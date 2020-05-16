import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={7} {...props}>
    <path d="M7 0L0 7h14L7 0zm0 1.406L11.563 6H2.437L7 1.406z" />
    <path d="M7 1.406L2.437 6h9.126L7 1.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
