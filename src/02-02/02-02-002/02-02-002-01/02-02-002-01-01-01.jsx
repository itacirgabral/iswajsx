import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={8} {...props}>
    <path d="M4 0a4 4 0 100 8 4 4 0 000-8zM14 0a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

export default SvgComponent;
