import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0L0 6v21h12V6L6 0z" />
    <path d="M6 2.813l-4 4V25h4V11h4V6.812l-4-4z" fill="#fff" />
  </svg>
);

export default SvgComponent;
