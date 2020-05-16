import React from "react";

const SvgComponent = (props) => (
  <svg width={7} height={12} {...props}>
    <path d="M3.5 12a3 3 0 110-6 3 3 0 010 6z" />
    <path d="M2.75 7h1.5V0h-1.5v7z" />
  </svg>
);

export default SvgComponent;
