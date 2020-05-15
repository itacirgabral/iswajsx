import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h11v9H2z" />
    <path d="M13 3h2v12h-2zM8 0h2v15H8z" />
  </svg>
);

export default SvgComponent;
