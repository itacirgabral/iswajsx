import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={23} {...props}>
    <path d="M8 23l-8-8 8-8v16zM22 0v2a5 5 0 015 5v1a5 5 0 01-5 5H8v4h13a8 8 0 008-8V7a7 7 0 00-7-7z" />
  </svg>
);

export default SvgComponent;
