import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={6} {...props}>
    <path d="M0 4v2h8V4H0zM0 0v2h8V0H0z" />
  </svg>
);

export default SvgComponent;
