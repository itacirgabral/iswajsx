import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h18v2H0zM16 2h2v4h-2z" />
  </svg>
);

export default SvgComponent;