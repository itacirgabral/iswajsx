import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={9} {...props}>
    <path d="M9 0L0 9h2l7-7 7 7h2L9 0z" />
  </svg>
);

export default SvgComponent;
