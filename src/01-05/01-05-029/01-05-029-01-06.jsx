import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={18} {...props}>
    <path d="M8 0h8v18H8zM0 0v8h2V4h4V0H0z" />
  </svg>
);

export default SvgComponent;
