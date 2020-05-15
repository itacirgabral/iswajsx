import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v27h12V0L6 6 0 0z" />
    <path d="M2 4.813V25h8V4.812l-4 4-4-4z" fill="#fff" />
    <path d="M18.375 11.813L12 18.186V21l7.781-7.781-1.406-1.406z" />
  </svg>
);

export default SvgComponent;
