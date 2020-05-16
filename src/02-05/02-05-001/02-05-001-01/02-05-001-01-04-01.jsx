import React from "react";

const SvgComponent = (props) => (
  <svg width={2} height={8} {...props}>
    <path d="M0 0h2v8H0V0z" />
  </svg>
);

export default SvgComponent;
