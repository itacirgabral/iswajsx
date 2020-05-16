import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h6v11H2z" />
    <path d="M9 6v6h2V8h2v7h2V6H9zM5 0h2v15H5z" />
  </svg>
);

export default SvgComponent;
