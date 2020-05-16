import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={19} {...props}>
    <path d="M0 4h15v15H0z" />
    <path d="M2 6v4H0v3h2v4h11v-4h2v-3h-2V6H2z" fill="#fff" />
    <path d="M4 6v6h2V6H4zm5 0v6h2V6H9zM5 0h4v4H5z" />
  </svg>
);

export default SvgComponent;
