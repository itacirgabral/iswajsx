import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={11} {...props}>
    <path d="M0 0l42 6v5L0 2V0z" />
  </svg>
);

export default SvgComponent;
