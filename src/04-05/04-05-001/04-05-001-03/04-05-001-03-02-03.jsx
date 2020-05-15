import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 3v2h10V3H5z" />
    <path d="M0 4c0-2.21 2.239-4 5-4h1v1H5a3 3 0 000 6h1v1H5C2.239 8 0 6.21 0 4z" />
    <path d="M7 4a2 2 0 11-4 0 2 2 0 114 0z" />
  </svg>
);

export default SvgComponent;
