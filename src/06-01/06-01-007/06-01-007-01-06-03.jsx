import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0L0 6v21h12V6L6 0z" />
    <path d="M6 2.813l-4 4V10H0v8h2v7h8v-7h2v-8h-2V6.812l-4-4z" fill="#fff" />
    <path d="M6.5 9a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);

export default SvgComponent;
