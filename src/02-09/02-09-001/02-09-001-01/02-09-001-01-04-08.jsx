import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={12} {...props}>
    <path d="M9 0a5 5 0 015 5v2a5 5 0 01-5 5V9a3 3 0 003-3V4a3 3 0 00-3-3H0V0h9z" />
  </svg>
);

export default SvgComponent;
