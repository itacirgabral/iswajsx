import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 8h15v15H4z" />
    <path fill="#fff" d="M6 10h11v11H6z" />
    <path d="M4 0C0 0 0 4 0 4c0 5 4 8 4 8V8h1C3 6 3 4 3 4c0-2 1-2 1-2 1 0 1.129 1.01 1 1v1h2V3c0-3-3-3-3-3z" />
  </svg>
);

export default SvgComponent;
