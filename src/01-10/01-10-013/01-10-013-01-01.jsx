import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path fill="#fff" d="M2 2h11v11H2z" />
    <path d="M4 2v6h2V2H4zm5 0v6h2V2H9z" />
  </svg>
);

export default SvgComponent;