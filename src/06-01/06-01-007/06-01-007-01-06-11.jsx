import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0L0 6v21h12V6L6 0z" />
    <path d="M6 2.813l4 4V21h2v7H0v-7h2V6.812l4-4z" fill="#fff" />
    <path d="M6.5 19a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);

export default SvgComponent;
