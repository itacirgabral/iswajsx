import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={2} {...props}>
    <path d="M8 0H0v2h8V0z" />
  </svg>
);

export default SvgComponent;
