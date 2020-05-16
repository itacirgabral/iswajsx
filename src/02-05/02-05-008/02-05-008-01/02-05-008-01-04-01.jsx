import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={10} {...props}>
    <path d="M0 0v10h12V8H2V0H0z" />
  </svg>
);

export default SvgComponent;
