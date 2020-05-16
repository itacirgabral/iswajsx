import React from "react";

const SvgComponent = (props) => (
  <svg width={2} height={16} {...props}>
    <path d="M0 0v16h2V0H0z" />
  </svg>
);

export default SvgComponent;
