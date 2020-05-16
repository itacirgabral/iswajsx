import React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={15} {...props}>
    <path d="M7 15L0 8h14l-7 7zm0-1.438L11.563 9H2.437L7 13.563zM6 8h2V1H6v7z" />
    <path d="M7 13.563L2.437 9h9.126L7 13.563z" fill="#fff" />
    <path d="M20 0l-7 7h14l-7-7zm0 1.438L24.563 6h-9.125L20 1.437zM19 7h2v7h-2V7z" />
    <path d="M20 1.438L15.437 6h9.126L20 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
