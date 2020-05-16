import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={26} {...props}>
    <path d="M8 0v7h2V2h4v8h2V0H8zM16 18a8 8 0 11-16 0 8 8 0 1116 0z" />
    <path d="M7.963 24A6 6 0 018 12v6z" fill="#fff" />
  </svg>
);

export default SvgComponent;
