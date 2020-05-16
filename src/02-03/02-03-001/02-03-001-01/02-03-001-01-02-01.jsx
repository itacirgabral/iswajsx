import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={15} {...props}>
    <path d="M7.5 0l-7 7h14l-7-7zm0 1.438L12.063 6H2.937L7.5 1.437zM4 7h2v8H4V7zM9 7h2v8H9V7z" />
    <path d="M6 7v8h3V7H6zM7.5 1.438L2.937 6h9.126L7.5 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
