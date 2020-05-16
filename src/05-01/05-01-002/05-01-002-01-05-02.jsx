import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={12} {...props}>
    <path d="M9 0v12H6V4H0V0h9z" />
  </svg>
);

export default SvgComponent;
