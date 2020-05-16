import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h11v9H2z" />
    <path d="M13 0h2v15h-2zM5 6v6h2V8h2v7h2V6H5z" />
  </svg>
);

export default SvgComponent;
