import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={10} {...props}>
    <path d="M5 0L0 5l.719.719L5 1.437 9.281 5.72 10 5 5 0z" />
    <path d="M4.5 4v6h1V4h-1z" />
  </svg>
);

export default SvgComponent;
