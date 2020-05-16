import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={6} {...props}>
    <path d="M0 0v6h1V1.5h2V6h1V1.5h2V6h1V1.5h2V6h1V0H0z" />
  </svg>
);

export default SvgComponent;
