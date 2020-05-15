import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h15v15H0z" />
    <path d="M2 6v2H0v3h2v6h6v-6h7V8H8V6H2z" fill="#fff" />
    <path d="M8 0h4v4H8z" />
  </svg>
);

export default SvgComponent;
