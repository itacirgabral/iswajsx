import React from "react";

const SvgComponent = (props) => (
  <svg width={5} height={40} {...props}>
    <path d="M5 0H0v40h5V0z" />
  </svg>
);

export default SvgComponent;
