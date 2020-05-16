import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={17} {...props}>
    <path d="M0 7h42v4H0z" />
    <path d="M0 0h4v17H0z" />
  </svg>
);

export default SvgComponent;
