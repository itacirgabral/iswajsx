import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={7} {...props}>
    <path d="M7 0L0 7h2l5-5 5 5h2L7 0z" />
  </svg>
);

export default SvgComponent;
