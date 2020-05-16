import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={10} {...props}>
    <path d="M6.5 6V4h7v2z" />
    <path d="M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
  </svg>
);

export default SvgComponent;
