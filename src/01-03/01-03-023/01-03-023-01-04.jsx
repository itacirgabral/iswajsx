import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h11v9H2z" />
    <path d="M13 3h2v12h-2zM8 0h2v15H8zM12 23.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z" />
  </svg>
);

export default SvgComponent;
