import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h6v9H2z" />
    <path d="M13 0h2v15h-2zM16 22h8v2h-8z" />
  </svg>
);

export default SvgComponent;