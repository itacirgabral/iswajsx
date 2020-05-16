import React from "react";

const SvgComponent = (props) => (
  <svg width={5} height={12} {...props}>
    <path d="M0 0v12h5V0H0z" />
  </svg>
);

export default SvgComponent;
