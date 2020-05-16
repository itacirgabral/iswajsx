import React from "react";

const SvgComponent = (props) => (
  <svg width={36} height={16} {...props}>
    <path d="M28 0a8 8 0 010 16H0v-4h28c3.314 0 6-1.79 6-4a6 6 0 00-6-6h-6V0h6z" />
  </svg>
);

export default SvgComponent;
