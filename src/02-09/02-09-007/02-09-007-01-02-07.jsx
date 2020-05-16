import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={40} {...props}>
    <path d="M6 6v1h10a3 3 0 013 3v2a3 3 0 01-3 3H5v3h11a5 5 0 005-5v-2a5 5 0 00-5-5H6z" />
    <path d="M6 1L.5 6.5 6 12V1zM5 3.438v6.124L1.937 6.5 5 3.437zM14 0v15h1V0h-1zm0 18v13h1V18h-1zm0 16v6h1v-6h-1z" />
    <path d="M5 22v1h11a3 3 0 013 3v2a3 3 0 01-3 3H6v3h10a5 5 0 005-5v-2a5 5 0 00-5-5H5z" />
    <path d="M11 0v15h3V0h-3zm0 18v13h3V18h-3zm0 16v6h3v-6h-3z" fill="#fff" />
    <path d="M10 0v15h1V0h-1zm0 18v13h1V18h-1zm0 16v6h1v-6h-1z" />
    <path d="M5 3.438L1.937 6.5 5 9.563V3.436z" fill="#fff" />
    <path d="M6 27L.5 32.5 6 38V27zm-1 2.438v6.125L1.937 32.5 5 29.437z" />
    <path d="M5 29.438L1.937 32.5 5 35.563v-6.126z" fill="#fff" />
  </svg>
);

export default SvgComponent;
