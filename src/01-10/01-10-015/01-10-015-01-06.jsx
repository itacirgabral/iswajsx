import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M0 4v3h15V4H0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
