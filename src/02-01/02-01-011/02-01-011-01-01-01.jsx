import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 2a4 4 0 110 8 4 4 0 010-8z" />
    <path
      d="M6 2a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"
      fill="#fff"
    />
    <path d="M6 4a2 2 0 100 4 2 2 0 000-4zM20 0a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z" />
    <path
      d="M20 2a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"
      fill="#fff"
    />
    <path d="M20 4a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

export default SvgComponent;
