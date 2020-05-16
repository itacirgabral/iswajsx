import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={10} {...props}>
    <path d="M0 0h15v10H0z" />
    <path fill="#fff" d="M2 2h11v3H2z" />
  </svg>
);

export default SvgComponent;
