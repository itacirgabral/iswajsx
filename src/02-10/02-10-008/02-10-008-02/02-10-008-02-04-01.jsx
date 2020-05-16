import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={9} {...props}>
    <path d="M0 9h18L9 0 0 9z" />
  </svg>
);

export default SvgComponent;
