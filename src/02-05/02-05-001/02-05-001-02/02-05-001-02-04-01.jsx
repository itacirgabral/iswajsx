import React from "react";

const SvgComponent = (props) => (
  <svg width={2} height={22} {...props}>
    <path d="M0 0h2v22H0V0z" />
  </svg>
);

export default SvgComponent;
