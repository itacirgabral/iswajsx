import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={8} {...props}>
    <path d="M0 3h18v2H0z" />
    <path d="M5.703 0l-.719.719L12.297 8l.719-.688L5.703 0z" />
  </svg>
);

export default SvgComponent;
