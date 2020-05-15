import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h15v15H0z" />
    <path fill="#fff" d="M2 6h11v11H2z" />
    <path d="M5 6v6h2V6H5zm4 0v6h2V6H9zM2 0h4v4H2z" />
  </svg>
);

export default SvgComponent;
