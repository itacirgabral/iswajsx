import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M9 6v3H-.04V6H9z" fill="#fff" />
  </svg>
);

export default SvgComponent;