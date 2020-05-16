import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={6} {...props}>
    <path d="M0 6V0h1v4h2V0h1v4h2V0h1v4h2V0h1v6H0z" />
  </svg>
);

export default SvgComponent;
