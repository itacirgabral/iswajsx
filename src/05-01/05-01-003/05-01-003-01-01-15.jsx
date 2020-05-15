import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M54 5H12v4h42V5zM0 5l5 5 .719-.719L1.437 5 5.72.719 5 0 0 5z" />
    <path d="M4 7V6h6v1H4zM4 4V3h6v1H4z" />
  </svg>
);

export default SvgComponent;
