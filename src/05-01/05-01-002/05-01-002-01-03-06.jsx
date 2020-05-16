import React from "react";

const SvgComponent = (props) => (
  <svg width={46} height={10} {...props}>
    <path d="M9 0v5L0 4v2l12 3V3l31 7h3V5L9 0z" />
  </svg>
);

export default SvgComponent;
