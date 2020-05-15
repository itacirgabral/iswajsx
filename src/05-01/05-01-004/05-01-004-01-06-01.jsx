import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 0l5 5-.719.719L5 1.437.719 5.72 0 5l5-5z" />
    <path d="M5.5 4h-1v6h1V4z" />
  </svg>
);

export default SvgComponent;
