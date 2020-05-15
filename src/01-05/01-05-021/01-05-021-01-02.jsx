import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 0L9 6v21h12V6l-6-6z" />
    <path d="M15 2.813l-4 4V25h4V2.812z" fill="#fff" />
    <path d="M0 16v2h9v-2H0z" />
  </svg>
);

export default SvgComponent;
