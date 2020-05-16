import React from "react";

const SvgComponent = (props) => (
  <svg width={5} height={11} {...props}>
    <path d="M2 7h1V0H2v7z" />
    <path d="M5 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0z" />
  </svg>
);

export default SvgComponent;
