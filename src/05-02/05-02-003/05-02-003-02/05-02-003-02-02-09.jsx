import React from "react";

const SvgComponent = (props) => (
  <svg width={4} height={12} {...props}>
    <path d="M4 0H0v12h4V0z" />
  </svg>
);

export default SvgComponent;
