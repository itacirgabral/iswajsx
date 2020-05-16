import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={4} {...props}>
    <path d="M0 0h42v4H0V0z" />
  </svg>
);

export default SvgComponent;
