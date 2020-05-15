import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0L0 6v21h12V6L6 0z" />
    <path d="M0 10v3h2v12h4V13h6v-3H0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
