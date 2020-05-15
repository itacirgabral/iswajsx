import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 18l4.5-4.5L9 18H0z" />
    <path d="M11 0v17c0 1.657-.895 3-2 3a2 2 0 01-2-2H2a4 4 0 004 4h1a5 5 0 005-5V0h-1z" />
  </svg>
);

export default SvgComponent;
