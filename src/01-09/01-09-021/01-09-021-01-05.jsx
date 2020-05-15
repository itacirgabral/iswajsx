import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 11h15v15H0z" />
    <path fill="#fff" d="M2 13h6v11H2z" />
    <path d="M7 0v7h2V2h4v7h2V0H7zM16 17v2h8v-2h-8z" />
  </svg>
);

export default SvgComponent;
