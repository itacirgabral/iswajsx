import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={22} {...props}>
    <path d="M0 0v22h14V0L7 7 0 0z" />
    <path d="M2 4.813V20h10V4.812L7 9.845 2 4.813z" fill="#fff" />
    <path d="M5 13h7v3H5z" />
  </svg>
);

export default SvgComponent;
