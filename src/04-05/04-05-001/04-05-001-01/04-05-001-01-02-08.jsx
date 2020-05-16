import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={12} {...props}>
    <path d="M5.5 5.586L6.914 7l4.95-4.95L10.45.637z" />
    <path d="M5.5 2a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
  </svg>
);

export default SvgComponent;
