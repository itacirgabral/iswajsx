import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v27h12V0L6 6 0 0z" />
    <path d="M2 4.813V9H0v3h2v13h4V12h6V9H6v-.188l-4-4z" fill="#fff" />
  </svg>
);

export default SvgComponent;