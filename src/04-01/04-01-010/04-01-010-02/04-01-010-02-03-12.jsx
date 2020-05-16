import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={6} {...props}>
    <path d="M0 2V0h18v2H0zM12 6l-1.406-1.406L13.188 2H16l-4 4z" />
  </svg>
);

export default SvgComponent;
