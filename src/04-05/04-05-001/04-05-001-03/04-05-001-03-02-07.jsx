import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 3v2h10V3H0z" />
    <path d="M15 4c0-2.21-2.239-4-5-4H9v1h1a3 3 0 010 6H9v1h1c2.761 0 5-1.79 5-4z" />
    <path d="M8 4a2 2 0 104 0 2 2 0 10-4 0z" />
  </svg>
);

export default SvgComponent;
