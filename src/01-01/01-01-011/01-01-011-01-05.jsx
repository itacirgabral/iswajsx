import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 13h15v13H0zM2 0v2h9s2 0 2 2v7h2V4s0-4-4-4H2z" />
    <path fill="#fff" d="M2 15h6v9H2z" />
  </svg>
);

export default SvgComponent;
