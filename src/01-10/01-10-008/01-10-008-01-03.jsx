import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={19} {...props}>
    <path d="M0 4h15v15H0z" />
    <path d="M4 5v7h2V5H4zm5 0v7h2V5H9z" fill="#fff" />
    <path d="M5 0h4v4H5z" />
  </svg>
);

export default SvgComponent;
