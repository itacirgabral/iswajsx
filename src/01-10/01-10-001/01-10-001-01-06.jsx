import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0h15v15H9z" />
    <path d="M9 3v3h15V3H9z" fill="#fff" />
    <path d="M0 7h9v2H0z" />
  </svg>
);

export default SvgComponent;
