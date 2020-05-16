import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={5} {...props}>
    <path d="M32 0H0v5h32V0z" />
  </svg>
);

export default SvgComponent;
