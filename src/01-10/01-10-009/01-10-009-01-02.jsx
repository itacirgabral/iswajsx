import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h15v15H0z" />
    <path d="M2 6v11h6v-4H6V6H2z" fill="#fff" />
    <path d="M7 5v7h2V5H7zm4 0v7h2V5h-2z" fill="#fff" />
    <path d="M2 0h4v4H2z" />
  </svg>
);

export default SvgComponent;
