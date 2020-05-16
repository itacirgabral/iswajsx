import React from "react";

const SvgComponent = (props) => (
  <svg width={11} height={5} {...props}>
    <path d="M11 0L0 2v3l11-2V0z" />
  </svg>
);

export default SvgComponent;
