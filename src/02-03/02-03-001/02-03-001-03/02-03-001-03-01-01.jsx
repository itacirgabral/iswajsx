import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={42} {...props}>
    <path d="M8 0L0 8h16L8 0zM4 8h2v34H4V8zM10 8h2v34h-2V8z" />
    <path d="M6 8v34h4V8H6z" fill="#fff" />
  </svg>
);

export default SvgComponent;
