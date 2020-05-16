import React from "react";

const SvgComponent = (props) => (
  <svg width={50} height={20} {...props}>
    <path d="M50 0v2l-39 9v6L0 20v-4l8-1V6l42-6z" />
  </svg>
);

export default SvgComponent;
