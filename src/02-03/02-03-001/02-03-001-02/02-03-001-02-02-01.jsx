import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={30} {...props}>
    <path d="M8 0L0 8h16L8 0zm0 1.438L13.563 7H2.437L8 1.437zM4 8h2v22H4V8zM10 8h2v22h-2V8z" />
    <path d="M6 8v22h4V8H6zM8 1.438L2.437 7h11.126L8 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
