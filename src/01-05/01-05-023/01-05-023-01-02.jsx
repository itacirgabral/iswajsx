import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={27} {...props}>
    <path d="M0 0v27h12V0L6 6 0 0z" />
    <path d="M2 4.813V25h4V8.812l-4-4z" fill="#fff" />
  </svg>
);

export default SvgComponent;
