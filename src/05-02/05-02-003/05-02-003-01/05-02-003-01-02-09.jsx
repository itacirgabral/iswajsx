import React from "react";

const SvgComponent = (props) => (
  <svg width={4} height={16} {...props}>
    <path d="M4 0H0v16h4V0z" />
  </svg>
);

export default SvgComponent;
