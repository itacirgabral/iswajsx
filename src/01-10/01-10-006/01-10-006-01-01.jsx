import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={15} {...props}>
    <path d="M0 0h15v15H0z" />
    <path fill="#fff" d="M2 2h11v11H2z" />
    <path d="M9.5 6a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
  </svg>
);

export default SvgComponent;
