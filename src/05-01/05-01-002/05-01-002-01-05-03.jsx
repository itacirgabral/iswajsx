import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={6} {...props}>
    <path d="M0 0v6h9V0H0z" />
  </svg>
);

export default SvgComponent;
