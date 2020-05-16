import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={2} {...props}>
    <path d="M0 0h16v2H0V0z" />
  </svg>
);

export default SvgComponent;
