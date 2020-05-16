import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={16} {...props}>
    <path d="M16 8A8 8 0 110 8a8 8 0 1116 0z" />
    <path d="M14 8A6 6 0 112 8a6 6 0 1112 0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
