import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={3} {...props}>
    <path d="M0 0v3h13V0H0z" />
  </svg>
);

export default SvgComponent;
