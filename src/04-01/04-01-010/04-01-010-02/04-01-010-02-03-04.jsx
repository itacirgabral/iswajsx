import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={6} {...props}>
    <path d="M18 2V0H0v2h18zM6 6l1.406-1.406L4.813 2H2l4 4z" />
  </svg>
);

export default SvgComponent;
