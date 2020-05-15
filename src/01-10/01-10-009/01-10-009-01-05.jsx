import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h15v15H0z" />
    <path d="M2 6v6H0v3h2v2h6v-2h7v-3H6V6H2z" fill="#fff" />
    <path d="M7 5v6h2V5H7zm4 0v6h2V5h-2z" fill="#fff" />
    <path d="M2 0h4v4H2z" />
  </svg>
);

export default SvgComponent;
