import React from "react";

const SvgComponent = (props) => (
  <svg width={2} height={32} {...props}>
    <path d="M2 0H0v32h2V0z" />
  </svg>
);

export default SvgComponent;
