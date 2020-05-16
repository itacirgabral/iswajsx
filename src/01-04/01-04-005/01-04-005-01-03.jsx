import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={22} {...props}>
    <path d="M0 0v22h14V0L7 7 0 0z" />
    <path fill="#fff" d="M0 13h9v3H0z" />
  </svg>
);

export default SvgComponent;
