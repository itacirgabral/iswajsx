import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={15} {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M2 2v11h11V9H6V6h7V2H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
