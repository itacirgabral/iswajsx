import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={27} {...props}>
    <path d="M6 0L0 6v21h12V6L6 0z" />
  </svg>
);

export default SvgComponent;
