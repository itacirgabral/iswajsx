import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={19} {...props}>
    <path d="M0 4h15v15H0z" />
    <path fill="#fff" d="M2 6h11v11H2z" />
    <path d="M4 6v6h2V6H4zm5 0v6h2V6H9zM5 0h4v4H5z" />
  </svg>
);

export default SvgComponent;
