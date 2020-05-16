import React from "react";

const SvgComponent = (props) => (
  <svg width={46} height={12} {...props}>
    <path d="M0 12V8h6V0h34v8h6v4h-9V4H9v8H0z" />
  </svg>
);

export default SvgComponent;
