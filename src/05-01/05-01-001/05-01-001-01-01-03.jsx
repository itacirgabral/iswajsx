import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={32} {...props}>
    <path d="M0 0h42v4H0V0zM20 4h2v28h-2V4z" />
  </svg>
);

export default SvgComponent;
