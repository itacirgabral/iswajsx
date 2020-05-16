import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={6} {...props}>
    <path d="M0 2.25h15v1.5H0z" />
    <path d="M13 0a2 2 0 00-2 2v2a2 2 0 004 0V2a2 2 0 00-2-2z" />
  </svg>
);

export default SvgComponent;
