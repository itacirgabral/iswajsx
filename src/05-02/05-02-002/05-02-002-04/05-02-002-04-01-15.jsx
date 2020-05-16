import React from "react";

const SvgComponent = (props) => (
  <svg width={48} height={2} {...props}>
    <path d="M48 0H0v2h48V0z" />
  </svg>
);

export default SvgComponent;
