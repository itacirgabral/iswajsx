import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M13 0h2v15h-2zM0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h11v11H2z" />
  </svg>
);

export default SvgComponent;
