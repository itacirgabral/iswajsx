import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={6} {...props}>
    <path d="M3 2V0h18v2H3zM1.813 6L.405 4.594 3 2h2.813l-4 4z" />
  </svg>
);

export default SvgComponent;
