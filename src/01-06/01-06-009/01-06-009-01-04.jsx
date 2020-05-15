import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h11v9H2z" />
    <path d="M11 4h2v11h-2zM7 0h2v15H7zM3 4h2v11H3zM18.281 18.344L16 22.312v3.97l4-6.938-1.719-1z" />
  </svg>
);

export default SvgComponent;