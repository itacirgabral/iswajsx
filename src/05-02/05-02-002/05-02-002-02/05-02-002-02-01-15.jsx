import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={2} {...props}>
    <path d="M32 0H0v2h32V0z" />
  </svg>
);

export default SvgComponent;
