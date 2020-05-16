import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={8} {...props}>
    <path d="M8 0L0 8h2l6-6 6 6h2L8 0z" />
  </svg>
);

export default SvgComponent;
