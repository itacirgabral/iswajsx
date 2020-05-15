import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L.031 7.969h2.813L8 2.812l5.156 5.157h2.813L8 0zM4 8h2v22H4V8zM10 8h2v22h-2V8z" />
    <path d="M6 8v22h4V8H6z" fill="#fff" />
    <path d="M0 17v3h16v-3H0z" />
  </svg>
);

export default SvgComponent;
