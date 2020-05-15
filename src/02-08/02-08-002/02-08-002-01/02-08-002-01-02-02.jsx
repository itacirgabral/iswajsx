import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17 0a4 4 0 014 4v1h-2V4a2 2 0 00-2-2h-1a3 3 0 00-3 3v10l-2.375-4.156A1.982 1.982 0 009 10a3 3 0 00-3 3v2c0 3.283 4 9 4 9H0s4-5.717 4-9v-2a5 5 0 015-5c.73 0 1.41.221 2 .563V5a5 5 0 015-5h1z" />
    <path d="M26 5l-6 6-6-6h12zm-2.438 1h-7.125L20 9.563 23.563 6z" />
    <path d="M23.563 6L20 9.563 16.437 6h7.125z" fill="#fff" />
  </svg>
);

export default SvgComponent;
