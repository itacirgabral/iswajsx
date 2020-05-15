import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path fill="#fff" d="M2 2h6v11H2z" />
    <path d="M18.281 5.344L15 11.03V15l5-8.656-1.719-1z" />
  </svg>
);

export default SvgComponent;
