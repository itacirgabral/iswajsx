import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M2 2v4H0v2h2v5h11V8h2V6h-2V2H2z" fill="#fff" />
    <path d="M4 2v6h2V2H4zm5 0v6h2V2H9z" />
  </svg>
);

export default SvgComponent;
