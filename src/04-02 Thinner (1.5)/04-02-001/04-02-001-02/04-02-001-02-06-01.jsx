import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={6} {...props}>
    <path d="M0 4.5V6h8V4.5H0zM0 0v1.5h8V0H0z" />
  </svg>
);

export default SvgComponent;
