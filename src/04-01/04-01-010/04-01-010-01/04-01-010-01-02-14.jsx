import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={11} {...props}>
    <path d="M0 0h42v4H0zM0 4h4v7H0z" />
  </svg>
);

export default SvgComponent;
