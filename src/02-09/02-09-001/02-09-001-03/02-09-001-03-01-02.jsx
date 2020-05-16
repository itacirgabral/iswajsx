import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={23} {...props}>
    <path d="M0 15l8 8 8-8H0zM14 0a8 8 0 00-8 8v7h4V7a5 5 0 015-5h14V0H14z" />
  </svg>
);

export default SvgComponent;
