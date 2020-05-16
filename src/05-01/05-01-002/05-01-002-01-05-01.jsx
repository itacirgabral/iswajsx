import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={12} {...props}>
    <path d="M0 0v12h3V4h6V0H0z" />
  </svg>
);

export default SvgComponent;
