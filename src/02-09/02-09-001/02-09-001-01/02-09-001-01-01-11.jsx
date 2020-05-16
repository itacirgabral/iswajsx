import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={16} {...props}>
    <path d="M14 0a5 5 0 015 5v2a5 5 0 01-5 5H6V9h8a3 3 0 003-3V4a3 3 0 00-3-3H2V0h12z" />
    <path d="M6 5v11L.5 10.5 6 5z" />
  </svg>
);

export default SvgComponent;
