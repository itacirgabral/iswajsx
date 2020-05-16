import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={38} {...props}>
    <path d="M42 0L0 6v5l42-9V0zM42 27L0 33v5l42-9v-2z" />
  </svg>
);

export default SvgComponent;
