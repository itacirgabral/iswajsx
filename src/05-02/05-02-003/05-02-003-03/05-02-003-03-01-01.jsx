import React from "react";

const SvgComponent = (props) => (
  <svg width={2} height={8} {...props}>
    <path d="M2 0H0v8h2V0z" />
  </svg>
);

export default SvgComponent;
