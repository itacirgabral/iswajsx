import React from "react";

const SvgComponent = (props) => (
  <svg width={40} height={14} {...props}>
    <path d="M7 0L0 7h14L7 0zm0 1.438L11.563 6H2.437L7 1.437zM6 7h2v7H6V7z" />
    <path d="M7 1.438L2.437 6h9.126L7 1.437z" fill="#fff" />
    <path d="M20 0l-7 7h14l-7-7zm0 1.438L24.563 6h-9.125L20 1.437zM19 7h2v7h-2V7z" />
    <path d="M20 1.438L15.437 6h9.126L20 1.437z" fill="#fff" />
    <path d="M33 0l-7 7h14l-7-7zm0 1.438L37.563 6h-9.126L33 1.437zM32 7h2v7h-2V7z" />
    <path d="M33 1.438L28.437 6h9.125L33 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
