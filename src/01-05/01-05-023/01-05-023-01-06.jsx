import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={27} {...props}>
    <path d="M0 0v27h12V0L6 6 0 0z" />
    <path d="M0 9v3h12V9H0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
