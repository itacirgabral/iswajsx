import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={4} {...props}>
    <path d="M0 0v4h16V0H0z" />
  </svg>
);

export default SvgComponent;
