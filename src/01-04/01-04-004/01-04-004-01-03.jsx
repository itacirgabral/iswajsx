import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={22} {...props}>
    <path d="M7 0L0 7v15h14V7L7 0z" />
    <path fill="#fff" d="M0 12h8v3H0z" />
  </svg>
);

export default SvgComponent;
