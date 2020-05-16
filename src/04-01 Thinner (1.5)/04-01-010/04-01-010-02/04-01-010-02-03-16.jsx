import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={6} {...props}>
    <path d="M18 4v2H0V4h18zM6 0l1.406 1.406L4.813 4H2l4-4z" />
  </svg>
);

export default SvgComponent;
