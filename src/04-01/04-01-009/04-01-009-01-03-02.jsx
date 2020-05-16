import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={18} {...props}>
    <path d="M0 7h42v4H0z" />
    <path d="M28.594 0L30 1.406 13.406 18 12 16.594 28.594 0z" />
  </svg>
);

export default SvgComponent;
