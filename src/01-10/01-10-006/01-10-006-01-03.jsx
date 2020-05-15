import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M5.5 6a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill="#fff" />
  </svg>
);

export default SvgComponent;
