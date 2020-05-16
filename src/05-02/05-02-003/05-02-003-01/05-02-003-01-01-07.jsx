import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={2} {...props}>
    <path d="M16 0H0v2h16V0z" />
  </svg>
);

export default SvgComponent;
