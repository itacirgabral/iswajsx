import React from "react";

const SvgComponent = (props) => (
  <svg width={33} height={32} {...props}>
    <path d="M24 0a4 4 0 014 4v1h-2V4a2 2 0 00-2-2h-1a3 3 0 00-3 3v10l-2.375-4.156A1.982 1.982 0 0016 10a3 3 0 00-3 3v10l-2.375-4.156A1.982 1.982 0 009 18a3 3 0 00-3 3v2c0 3.283 4 9 4 9H0s4-5.717 4-9v-2a5 5 0 015-5c.73 0 1.41.221 2 .563V13a5 5 0 015-5c.73 0 1.41.221 2 .563V5a5 5 0 015-5h1z" />
    <path d="M33 5l-6 6-6-6h12z" />
  </svg>
);

export default SvgComponent;
