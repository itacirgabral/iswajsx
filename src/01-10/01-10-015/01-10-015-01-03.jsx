import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={15} {...props}>
    <path d="M0 0h15v15H0z" />
  </svg>
);

export default SvgComponent;
