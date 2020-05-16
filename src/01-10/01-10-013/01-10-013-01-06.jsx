import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={15} {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M0 6v2h15V6H0zM4 0v6h2V0H4zm5 0v6h2V0H9z" fill="#fff" />
  </svg>
);

export default SvgComponent;
