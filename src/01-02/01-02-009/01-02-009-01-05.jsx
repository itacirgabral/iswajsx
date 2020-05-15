import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h6v9H2z" />
    <path d="M9 6v6h2V8h2v7h2V6H9zM5 0h2v15H5z" />
  </svg>
);

export default SvgComponent;
