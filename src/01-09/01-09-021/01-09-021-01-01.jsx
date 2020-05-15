import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 11h15v15H0z" />
    <path fill="#fff" d="M2 13h11v11H2z" />
    <path d="M7 0v7h2V2h4v9h2V0H7zM15 17v2h9v-2h-9z" />
  </svg>
);

export default SvgComponent;
