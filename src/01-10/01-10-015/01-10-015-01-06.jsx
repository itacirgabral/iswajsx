import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={15} {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M0 4v3h15V4H0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
