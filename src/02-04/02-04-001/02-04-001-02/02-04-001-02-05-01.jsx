import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={3} {...props}>
    <path d="M0 0v3h16V0H0z" />
  </svg>
);

export default SvgComponent;
