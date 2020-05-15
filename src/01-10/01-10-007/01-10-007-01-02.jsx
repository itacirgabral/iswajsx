import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h15v15H0z" />
    <path fill="#fff" d="M2 6h6v11H2z" />
    <path d="M8 0h4v4H8z" />
  </svg>
);

export default SvgComponent;
