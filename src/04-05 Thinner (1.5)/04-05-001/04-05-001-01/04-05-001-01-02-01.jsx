import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4.75 0h1.5v7h-1.5z" />
    <path d="M5.5 3a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
  </svg>
);

export default SvgComponent;
