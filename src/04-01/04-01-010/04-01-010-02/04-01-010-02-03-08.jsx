import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={6} {...props}>
    <path d="M0 4v2h18V4H0zM12 0l-1.406 1.406L13.188 4H16l-4-4z" />
  </svg>
);

export default SvgComponent;
