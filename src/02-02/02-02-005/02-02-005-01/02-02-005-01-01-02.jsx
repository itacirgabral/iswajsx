import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={15} {...props}>
    <path d="M4 7a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4zM11 0a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z" />
    <path
      d="M11 2a2 2 0 100 4 2 2 0 000-4zM4 9a2 2 0 100 4 2 2 0 000-4z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
