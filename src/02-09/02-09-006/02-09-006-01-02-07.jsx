import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 6a5 5 0 015 5v2a5 5 0 01-5 5H3v-3h12a3 3 0 003-3v-2a3 3 0 00-3-3H6V6h9z" />
    <path d="M6 1L.5 6.5 6 12V1zM5 3.438v6.124L1.937 6.5 5 3.437zM13 0v15h1V0h-1zm0 18v16h1V18h-1zm0 19v6h1v-6h-1z" />
    <path d="M15 25a5 5 0 015 5v2a5 5 0 01-5 5H3v-3h12a3 3 0 003-3v-2a3 3 0 00-3-3H6v-1h9z" />
    <path d="M10 0v15h3V0h-3zm0 18v16h3V18h-3zm0 19v6h3v-6h-3z" fill="#fff" />
    <path d="M6 20L.5 25.5 6 31V20zm-1 2.438v6.125L1.937 25.5 5 22.437zM9 0v15h1V0H9zm0 18v16h1V18H9zm0 19v6h1v-6H9z" />
    <path
      d="M5 3.438L1.937 6.5 5 9.563V3.436zM5 22.438L1.937 25.5 5 28.563v-6.125z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;