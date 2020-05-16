import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={2} {...props}>
    <path d="M0 0v1.5h12V0H0z" />
  </svg>
);

export default SvgComponent;
