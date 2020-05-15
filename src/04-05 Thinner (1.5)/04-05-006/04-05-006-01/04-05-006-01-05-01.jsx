import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3 0a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4z" />
    <path d="M4 3a1 1 0 11-2 0 1 1 0 112 0z" />
    <path
      d="M3 1a2 2 0 100 4 2 2 0 000-4zm0 1a1 1 0 110 2 1 1 0 010-2z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
