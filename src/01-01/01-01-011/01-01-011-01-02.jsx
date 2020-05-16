import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={26} {...props}>
    <path d="M0 11h15v15H0zM2 0v2h9s2 0 2 2v7h2V4s0-4-4-4H2z" />
    <path fill="#fff" d="M2 13h6v11H2z" />
  </svg>
);

export default SvgComponent;
