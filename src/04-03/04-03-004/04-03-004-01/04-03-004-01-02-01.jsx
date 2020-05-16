import React from "react";

const SvgComponent = (props) => (
  <svg width={1} height={12} {...props}>
    <path d="M0 0v12h1V0H0z" />
  </svg>
);

export default SvgComponent;
