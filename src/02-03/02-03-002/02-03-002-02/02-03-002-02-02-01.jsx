import React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={18} {...props}>
    <path d="M7.5 0l-7 7h14l-7-7zm0 1.438L12.063 6H2.937L7.5 1.437zM4 7h2v7H4V7zM9 7h2v7H9V7z" />
    <path d="M6 7v7h3V7H6zM7.5 1.438L2.937 6h9.126L7.5 1.437z" fill="#fff" />
    <path d="M19.5 0l-7 7h14l-7-7zm0 1.438L24.063 6h-9.125L19.5 1.437zM16 7h2v7h-2V7zM21 7h2v7h-2V7z" />
    <path
      d="M18 7v7h3V7h-3zM19.5 1.438L14.937 6h9.126L19.5 1.437z"
      fill="#fff"
    />
    <path d="M0 16v2h27v-2H0z" />
  </svg>
);

export default SvgComponent;
