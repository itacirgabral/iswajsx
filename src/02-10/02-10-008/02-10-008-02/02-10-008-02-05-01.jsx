import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0L0 9h18L9 0zm0 1.406L15.563 8H2.437L9 1.406z" />
    <path d="M9 1.406L2.437 8h13.126L9 1.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
