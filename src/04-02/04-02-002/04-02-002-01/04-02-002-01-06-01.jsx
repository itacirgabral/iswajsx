import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 0L0 5l.719.719L5.406 1H12V0H5z" />
    <path d="M6.594 3L2.28 7.281 3 8l4-4h4V3H6.594z" />
  </svg>
);

export default SvgComponent;
