import React from "react";

const SvgComponent = (props) => (
  <svg width={46} height={12} {...props}>
    <path d="M0 0v4h6v8h34V4h6V0h-9v8H9V0H0z" />
  </svg>
);

export default SvgComponent;
