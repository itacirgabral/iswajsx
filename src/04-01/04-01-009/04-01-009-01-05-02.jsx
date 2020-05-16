import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={8} {...props}>
    <path d="M0 3h18v2H0z" />
    <path d="M12.297 0l.719.719L5.703 8l-.719-.688L12.297 0z" />
  </svg>
);

export default SvgComponent;
