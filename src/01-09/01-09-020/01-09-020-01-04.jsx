import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h11v9H2z" />
    <path d="M13 0h2v15h-2zM18.063 15.063l-1.438 1.406L20.188 20 16 24.188V27l7-7-4.938-4.938z" />
  </svg>
);

export default SvgComponent;
