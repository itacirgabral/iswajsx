import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={6} {...props}>
    <path d="M0 4v2h8V4H0zM0 0v2h8V0H0zM15 4v2h8V4h-8zM15 0v2h8V0h-8z" />
  </svg>
);

export default SvgComponent;
