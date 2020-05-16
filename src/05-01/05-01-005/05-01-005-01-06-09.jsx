import React from "react";

const SvgComponent = (props) => (
  <svg width={5} height={11} {...props}>
    <path d="M2 4h1v7H2V4z" />
    <path d="M5 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z" />
  </svg>
);

export default SvgComponent;
