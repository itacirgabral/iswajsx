import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={22} {...props}>
    <path d="M7 0L0 7v15h14V7L7 0z" />
    <path d="M7 2.813l-5 5.03V20h6V3.812l-1-1z" fill="#fff" />
    <path d="M2 12h5v3H2z" />
  </svg>
);

export default SvgComponent;
