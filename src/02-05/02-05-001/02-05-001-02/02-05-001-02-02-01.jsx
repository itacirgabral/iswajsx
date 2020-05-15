import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h16L8 0zm0 1.438L13.563 7H2.437L8 1.437zM7 8h2v22H7V8z" />
    <path d="M8 1.438L2.437 7h11.126L8 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
