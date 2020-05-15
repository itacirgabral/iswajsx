import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L.031 7.969h2.813L8 2.812l5.156 5.157h2.813L8 0zM4 8h2v34H4V8zM10 8h2v34h-2V8z" />
    <path d="M6 8v34h4V8H6z" fill="#fff" />
    <path d="M16 42l-4-8H4l-4 8h16z" />
  </svg>
);

export default SvgComponent;
