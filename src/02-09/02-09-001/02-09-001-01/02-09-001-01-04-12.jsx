import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0a5 5 0 015 5v2a5 5 0 01-5 5H0V9h8a3 3 0 003-3V4a3 3 0 00-3-3V0z" />
  </svg>
);

export default SvgComponent;
