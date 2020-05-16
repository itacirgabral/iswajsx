import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={15} {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M2 2v2H0v3h2v6h11V9H6V7h9V4h-2V2H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
