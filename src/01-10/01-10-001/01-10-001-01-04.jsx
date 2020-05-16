import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={15} {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M2 2v1H0v3h2v7h11V6h2V3h-2V2H2z" fill="#fff" />
    <path d="M15 7h9v2h-9z" />
  </svg>
);

export default SvgComponent;
