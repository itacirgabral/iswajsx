import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 15h15v13H0z" />
    <path fill="#fff" d="M2 17h6v9H2z" />
    <path d="M3.406 1.406L15 13h-2.812L1.969 2.812l1.437-1.406z" />
    <path d="M7 4v9h2V4s0-2 2-2 2 2 2 2v5h2V4s0-4-4-4-4 4-4 4z" />
  </svg>
);

export default SvgComponent;