import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0l6 6v21H0V6l6-6z" />
    <path d="M6 2.813l4 4V25H2V6.812l4-4z" fill="#fff" />
    <path d="M14 8v2a3 3 0 010 6v2h-1V8h1zm0 3v4a2 2 0 100-4z" />
    <path d="M14 11a2 2 0 010 4v-4z" fill="#fff" />
  </svg>
);

export default SvgComponent;
