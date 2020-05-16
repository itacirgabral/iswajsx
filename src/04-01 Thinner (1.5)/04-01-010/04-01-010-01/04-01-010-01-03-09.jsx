import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={6} {...props}>
    <path d="M0 4h18v2H0zM8 0h2v4H8z" />
  </svg>
);

export default SvgComponent;
