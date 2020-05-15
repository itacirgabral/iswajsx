import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0L0 6v21h12V6L6 0z" />
    <path d="M6 2.813l-4 4V10H0v3h2v12h4V13h6v-3h-2V6.812l-4-4z" fill="#fff" />
  </svg>
);

export default SvgComponent;