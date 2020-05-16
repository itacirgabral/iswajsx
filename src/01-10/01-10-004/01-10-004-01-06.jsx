import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={15} {...props}>
    <path d="M3 0h15v15H3z" />
    <path d="M3 4v3h15V4H3z" fill="#fff" />
    <path d="M2 0v10c0 2.03 1 2 1 2v3s-3 .05-3-5V0h2z" />
  </svg>
);

export default SvgComponent;
