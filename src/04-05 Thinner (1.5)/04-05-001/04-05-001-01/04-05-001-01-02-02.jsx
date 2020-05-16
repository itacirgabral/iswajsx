import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={12} {...props}>
    <path d="M6.323 5.763l-1.06 1.06-4.95-4.95 1.06-1.06z" />
    <path d="M6.5 2a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
  </svg>
);

export default SvgComponent;
