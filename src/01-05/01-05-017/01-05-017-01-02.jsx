import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={9} {...props}>
    <path d="M0 0h20v9H0z" />
    <path fill="#fff" d="M2 2h16v3H2z" />
  </svg>
);

export default SvgComponent;
