import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0l8 8H0l8-8zm0 1.438L2.406 7h11.188L8 1.437zM9 8v6a4 4 0 004 4h13v4H14a7 7 0 01-7-7V8h2z" />
    <path d="M8 1.438L13.594 7H2.406L8 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;