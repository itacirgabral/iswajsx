import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h16L8 0zm0 1.406L13.563 7H2.437L8 1.406z" />
    <path d="M8 1.406L2.437 7h11.126L8 1.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
