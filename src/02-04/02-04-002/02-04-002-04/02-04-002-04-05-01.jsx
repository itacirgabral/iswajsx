import React from "react";

const SvgComponent = (props) => (
  <svg width={11} height={11} {...props}>
    <path d="M5.5 0a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" />
  </svg>
);

export default SvgComponent;
