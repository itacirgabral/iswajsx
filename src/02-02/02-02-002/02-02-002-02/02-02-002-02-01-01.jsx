import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={6} {...props}>
    <path d="M3 0a3 3 0 100 6 3 3 0 000-6zM11 0a3 3 0 100 6 3 3 0 000-6z" />
  </svg>
);

export default SvgComponent;
