import React from "react";

const SvgComponent = (props) => (
  <svg width={5} height={6} {...props}>
    <path d="M5 3a2.5 3 0 11-5 0 2.5 3 0 115 0z" />
  </svg>
);

export default SvgComponent;
