import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={7} {...props}>
    <path d="M0 7h14L7 0 0 7z" />
  </svg>
);

export default SvgComponent;
