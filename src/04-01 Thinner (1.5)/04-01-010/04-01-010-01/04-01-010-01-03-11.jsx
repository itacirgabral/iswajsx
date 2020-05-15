import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h18v2H0z" />
    <path d="M16 0h2v10h-2z" />
  </svg>
);

export default SvgComponent;
