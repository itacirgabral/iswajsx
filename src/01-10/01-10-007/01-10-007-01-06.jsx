import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h15v15H0z" />
    <path d="M0 8v3h15V8H0z" fill="#fff" />
    <path d="M3 0h4v4H3z" />
  </svg>
);

export default SvgComponent;
