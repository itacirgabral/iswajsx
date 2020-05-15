import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 0L5 8h16l-8-8zm0 1.438L18.563 7H7.438L13 1.437zM12 8v20.188l-12-12V40h2V21l12 12V8h-2z" />
    <path d="M13 1.438L7.437 7h11.125L13 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
