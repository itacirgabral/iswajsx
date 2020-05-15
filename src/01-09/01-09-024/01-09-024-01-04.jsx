import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h11v9H2z" />
    <path d="M13 0v15h2V0h-2zM9.5 21a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
  </svg>
);

export default SvgComponent;
