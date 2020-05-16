import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={6} {...props}>
    <path d="M8 4.25v1.5h7v-1.5H8zM4 3a2 2 0 00-2 2v.75h4V5a2 2 0 00-2-2z" />
    <path d="M4 0a4 4 0 00-4 4v1.75h1V4c0-1.38 1.343-2.5 3-2.5S7 2.62 7 4v1.75h1V4a4 4 0 00-4-4z" />
  </svg>
);

export default SvgComponent;
