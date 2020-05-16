import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={6} {...props}>
    <path d="M0 4.5V6h8V4.5H0zM0 0v1.5h8V0H0zM15 4.5V6h8V4.5h-8zM15 0v1.5h8V0h-8z" />
  </svg>
);

export default SvgComponent;
