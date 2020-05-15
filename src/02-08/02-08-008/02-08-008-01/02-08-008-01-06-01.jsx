import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5.5.5L0 6h2l3.5-3.5L9 6h2L5.5.5zM5 6v6a4 4 0 004 4h4a7 7 0 007-7h-9v2c0 1.657-.895 3-2 3a3 3 0 01-3-3V6H5z" />
  </svg>
);

export default SvgComponent;
