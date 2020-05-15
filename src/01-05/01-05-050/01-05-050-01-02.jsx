import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 0v15h8V0h-8z" />
    <path fill="#fff" d="M16 1h3v13h-3z" />
    <path d="M0 0h15v4H0zM2 13h13v2H2z" />
  </svg>
);

export default SvgComponent;
