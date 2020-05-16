import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={8} {...props}>
    <path d="M0 8h16L8 0 0 8z" />
  </svg>
);

export default SvgComponent;
