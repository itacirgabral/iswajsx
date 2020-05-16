import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={21} {...props}>
    <path d="M0 0v2h18a6 6 0 016 6v3a6 6 0 01-6 6h-1v4a9 9 0 009-9V8a8 8 0 00-8-8H0z" />
  </svg>
);

export default SvgComponent;
