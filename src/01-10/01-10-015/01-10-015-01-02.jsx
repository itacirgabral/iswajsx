import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path fill="#fff" d="M2 2h6v11H2z" />
  </svg>
);

export default SvgComponent;