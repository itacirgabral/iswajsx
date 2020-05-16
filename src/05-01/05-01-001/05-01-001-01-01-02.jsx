import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={11} {...props}>
    <path d="M42 0L0 6v5l42-9V0z" />
  </svg>
);

export default SvgComponent;
