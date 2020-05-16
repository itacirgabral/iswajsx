import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={8} {...props}>
    <path d="M5 0L0 5l.719.719L5.406 1H10V0H5zM6.594 3L2.28 7.281 3 8l4-4h5V3H6.594z" />
  </svg>
);

export default SvgComponent;
