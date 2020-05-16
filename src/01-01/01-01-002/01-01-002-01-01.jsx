import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={30} {...props}>
    <path d="M16 22a8 8 0 11-16 0 8 8 0 1116 0z" />
    <path d="M14 22a6 6 0 11-12 0 6 6 0 1112 0z" fill="#fff" />
    <path d="M14 0h2v22h-2z" />
  </svg>
);

export default SvgComponent;
