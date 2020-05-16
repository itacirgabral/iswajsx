import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={6} {...props}>
    <path d="M2 0v2h13V0H2zM0 4v2h17V4H0z" />
  </svg>
);

export default SvgComponent;
