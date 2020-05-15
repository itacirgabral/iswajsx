import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h20v9H0z" />
    <path fill="#fff" d="M2 2h16v3H2z" />
  </svg>
);

export default SvgComponent;
