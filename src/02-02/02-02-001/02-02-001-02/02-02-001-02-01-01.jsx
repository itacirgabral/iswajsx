import React from "react";

const SvgComponent = (props) => (
  <svg width={6} height={6} {...props}>
    <path d="M6 3a3 3 0 11-6 0 3 3 0 116 0z" />
  </svg>
);

export default SvgComponent;
