import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h6v11H2z" />
    <path d="M11 4h2v11h-2zM7 0h2v15H7zM3 4h2v11H3z" />
  </svg>
);

export default SvgComponent;
