import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={38} {...props}>
    <path d="M0 0l42 6v5L0 2V0zM0 27l42 6v5L0 29v-2z" />
  </svg>
);

export default SvgComponent;
