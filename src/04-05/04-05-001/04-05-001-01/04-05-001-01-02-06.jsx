import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={12} {...props}>
    <path d="M5.5 6.414L6.916 5l4.95 4.95-1.415 1.414z" />
    <path d="M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
  </svg>
);

export default SvgComponent;
