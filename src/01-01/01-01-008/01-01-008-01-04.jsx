import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={26} {...props}>
    <path d="M8 0v7h2V2h4v8h2V0H8zM16 18a8 8 0 11-16 0 8 8 0 1116 0z" />
    <path d="M14 18a6 6 0 11-12 0 6 6 0 1112 0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
