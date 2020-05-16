import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={26} {...props}>
    <path d="M11 13h15v13H11zM0 0v2h9c2 0 2 2 2 2v7h2V4s0-4-4-4H0z" />
  </svg>
);

export default SvgComponent;
