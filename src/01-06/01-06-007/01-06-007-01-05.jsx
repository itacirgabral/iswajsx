import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h6v9H2z" />
    <path d="M11 4h2v11h-2zM7 0h2v15H7zM3 4h2v11H3z" />
  </svg>
);

export default SvgComponent;
