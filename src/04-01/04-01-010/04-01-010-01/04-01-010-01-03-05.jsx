import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={6} {...props}>
    <path d="M0 0h18v2H0zM8 2h2v4H8z" />
  </svg>
);

export default SvgComponent;
