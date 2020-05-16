import React from "react";

const SvgComponent = (props) => (
  <svg width={11} height={4} {...props}>
    <path d="M7.5 0C11 0 11 4 11 4H9s0-2-1.5-2-1.5 2-4 2C0 4 0 0 0 0h2s0 2 1.5 2 1.5-2 4-2z" />
  </svg>
);

export default SvgComponent;
