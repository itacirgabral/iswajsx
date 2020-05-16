import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={6} {...props}>
    <path d="M2 0v1.5h13V0H2zM0 4.5V6h17V4.5H0z" />
  </svg>
);

export default SvgComponent;
