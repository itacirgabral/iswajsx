import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path fill="#fff" d="M2 2h6v11H2z" />
    <path d="M12 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 117 0z" />
    <path d="M11 7.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
