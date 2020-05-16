import React from "react";

const SvgComponent = (props) => (
  <svg width={11} height={5} {...props}>
    <path d="M0 0l11 2v3L0 3V0z" />
  </svg>
);

export default SvgComponent;
