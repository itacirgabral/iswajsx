import React from "react";

const SvgComponent = (props) => (
  <svg width={2} height={40} {...props}>
    <path d="M2 0H0v40h2V0z" />
  </svg>
);

export default SvgComponent;
