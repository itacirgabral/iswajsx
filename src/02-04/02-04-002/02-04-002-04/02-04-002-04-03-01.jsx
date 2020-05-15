import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L.031 7.969h2.813L8 2.812l5.156 5.157h2.813L8 0zM4 8h2v42H4V8zM10 8h2v42h-2V8z" />
    <path d="M6 8v42h4V8H6z" fill="#fff" />
    <path d="M8 23.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" />
  </svg>
);

export default SvgComponent;