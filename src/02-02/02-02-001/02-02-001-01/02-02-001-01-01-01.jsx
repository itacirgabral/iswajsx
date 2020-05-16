import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={8} {...props}>
    <path d="M8 4a4 4 0 11-8 0 4 4 0 118 0z" />
  </svg>
);

export default SvgComponent;
