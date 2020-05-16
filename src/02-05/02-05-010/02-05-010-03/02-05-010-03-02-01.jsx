import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={28} {...props}>
    <path d="M8 0L0 8h16L8 0zm0 1.438L13.563 7H2.437L8 1.437zM7 8v20h22V8h-2v18H9V8H7z" />
    <path d="M8 1.438L2.437 7h11.126L8 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
