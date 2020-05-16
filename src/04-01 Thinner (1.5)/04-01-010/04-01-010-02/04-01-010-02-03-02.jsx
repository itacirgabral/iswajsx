import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={6} {...props}>
    <path d="M3 4v2h18V4H3zM1.813 0L.405 1.406 3 4h2.813l-4-4z" />
  </svg>
);

export default SvgComponent;
