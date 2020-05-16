import React from "react";

const SvgComponent = (props) => (
  <svg width={40} height={12} {...props}>
    <path d="M40 0v4h-6v8H0V8h31V0h9z" />
  </svg>
);

export default SvgComponent;
