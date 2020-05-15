import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4.5 13.5L0 18h1l3.5-3.5L8 18h1l-4.5-4.5z" />
    <path d="M11 0v17c0 1.657-.895 3-2 3a2 2 0 01-2-2H2a4 4 0 004 4h1a5 5 0 005-5V0h-1z" />
  </svg>
);

export default SvgComponent;
