import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={9} {...props}>
    <path d="M10 0a5 5 0 015 5v4h-3V4a3 3 0 00-3-3H0V0h10z" />
  </svg>
);

export default SvgComponent;
