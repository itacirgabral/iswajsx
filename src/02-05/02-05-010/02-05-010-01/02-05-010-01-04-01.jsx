import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={11} {...props}>
    <path d="M0 0v11h13V0h-2v9H2V0H0z" />
  </svg>
);

export default SvgComponent;
