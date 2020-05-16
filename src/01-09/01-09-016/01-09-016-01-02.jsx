import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={30} {...props}>
    <path d="M0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h6v11H2z" />
    <path d="M13 0h2v15h-2zM15 22h9v2h-9z" />
  </svg>
);

export default SvgComponent;
