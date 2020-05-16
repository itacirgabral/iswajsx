import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={19} {...props}>
    <path d="M0 4h15v15H0z" />
    <path fill="#fff" d="M2 6h6v11H2z" />
    <path d="M8 0h4v4H8z" />
  </svg>
);

export default SvgComponent;
