import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v27h12V0L6 6 0 0z" />
    <path d="M2 4.813V9H0v3h2v13h8V12h2V9h-2V4.812l-4 4-4-4z" fill="#fff" />
  </svg>
);

export default SvgComponent;