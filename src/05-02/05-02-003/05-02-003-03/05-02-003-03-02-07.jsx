import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={4} {...props}>
    <path d="M8 0H0v4h8V0z" />
  </svg>
);

export default SvgComponent;
