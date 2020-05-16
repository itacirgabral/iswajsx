import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h6v11H2z" />
    <path d="M13 3h2v12h-2zM8 0h2v15H8z" />
  </svg>
);

export default SvgComponent;
