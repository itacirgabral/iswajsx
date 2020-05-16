import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={15} {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M2 2v2H0v3h2v6h6V7h7V4H8V2H2z" fill="#fff" />
    <path d="M18.531 1.563l-1.406 1.406L20.656 6.5 15 12.188V15l8.5-8.5-4.969-4.938z" />
  </svg>
);

export default SvgComponent;
