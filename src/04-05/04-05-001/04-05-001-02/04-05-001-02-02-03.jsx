import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={6} {...props}>
    <path d="M0 2h15v2H0zM2 0a2 2 0 00-2 2h4a2 2 0 00-2-2zM0 4a2 2 0 104 0H0z" />
  </svg>
);

export default SvgComponent;
