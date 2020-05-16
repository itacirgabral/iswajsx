import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={18} {...props}>
    <path d="M0 7h42v4H0z" />
    <path d="M13.406 0L12 1.406 28.594 18 30 16.594 13.406 0z" />
  </svg>
);

export default SvgComponent;
