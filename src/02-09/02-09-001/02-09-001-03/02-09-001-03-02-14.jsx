import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0l8 8H0l8-8zm0 1.438L2.437 7h11.126L8 1.437zM9 8v8a5 5 0 005 5h15v4H15a8 8 0 01-8-8V8h2z" />
    <path d="M8 1.438L13.563 7H2.437L8 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;