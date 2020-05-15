import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path fill="#fff" d="M2 2h11v11H2z" />
    <path d="M18.531 1.563l-1.406 1.406L20.656 6.5 15 12.188V15l8.5-8.5-4.969-4.938z" />
  </svg>
);

export default SvgComponent;
