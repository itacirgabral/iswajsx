import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M74 1v8H0V1h26v6h21V1h27z" />
    <path d="M26 1v6h21V1H26z" fill="#fff" />
    <path d="M34.5 0C31 0 31 4 31 4h2s0-2 1.5-2 1.5 2 4 2C42 4 42 0 42 0h-2s0 2-1.5 2-1.5-2-4-2z" />
  </svg>
);

export default SvgComponent;
