import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 0L5 6v21h12V6l-6-6z" />
    <path d="M11 2.813l-4 4V25h8V6.812l-4-4z" fill="#fff" />
    <path d="M3 17v2a3 3 0 000 6v2h1V17H3zm0 3v4a2 2 0 110-4z" />
    <path d="M3 20a2 2 0 000 4v-4z" fill="#fff" />
  </svg>
);

export default SvgComponent;
