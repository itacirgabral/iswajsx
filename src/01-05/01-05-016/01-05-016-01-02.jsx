import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={27} {...props}>
    <path d="M6 0L0 6v21h12V6L6 0z" />
    <path d="M2 11v14h4V11H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
