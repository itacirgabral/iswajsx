import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M2 2v2H0v3h2v6h11V7h2V4h-2V2H2z" fill="#fff" />
    <path d="M18.531 1.563l-1.406 1.406L20.656 6.5 15 12.188V15l8.5-8.5-4.969-4.938z" />
  </svg>
);

export default SvgComponent;
