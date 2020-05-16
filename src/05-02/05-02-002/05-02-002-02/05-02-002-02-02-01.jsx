import React from "react";

const SvgComponent = (props) => (
  <svg width={5} height={32} {...props}>
    <path d="M5 0H0v32h5V0z" />
  </svg>
);

export default SvgComponent;
