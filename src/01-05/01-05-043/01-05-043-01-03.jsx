import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={16} {...props}>
    <path d="M16 8A8 8 0 110 8a8 8 0 1116 0z" />
  </svg>
);

export default SvgComponent;
