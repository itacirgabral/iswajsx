import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={6} {...props}>
    <path d="M0 4h18v2H0zM16 0h2v4h-2z" />
  </svg>
);

export default SvgComponent;
