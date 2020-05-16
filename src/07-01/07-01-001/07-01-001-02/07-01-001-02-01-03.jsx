import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={72} {...props}>
    <path d="M8 72V0H0v72h8z" />
  </svg>
);

export default SvgComponent;
