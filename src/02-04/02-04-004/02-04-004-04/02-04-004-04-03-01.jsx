import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={50} {...props}>
    <path d="M8 0L.031 7.969h2.813L8 2.812l5.156 5.157h2.813L8 0zM4 8h2v42H4V8zM10 8h2v42h-2V8z" />
    <path d="M6 8v42h4V8H6z" fill="#fff" />
    <path d="M6 8v7h4V8H6z" />
  </svg>
);

export default SvgComponent;
