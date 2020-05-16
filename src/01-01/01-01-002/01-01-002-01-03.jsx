import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={30} {...props}>
    <path d="M16 22a8 8 0 11-16 0 8 8 0 1116 0z" />
    <path d="M0 0h2v22H0z" />
  </svg>
);

export default SvgComponent;
