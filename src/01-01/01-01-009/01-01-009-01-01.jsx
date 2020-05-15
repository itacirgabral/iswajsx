import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 11h15v15H0zM7 0v7h2V2h4v9h2V0H7z" />
    <path fill="#fff" d="M2 13h11v11H2z" />
    <path d="M4 13v6h2v-6H4zm5 0v6h2v-6H9z" />
  </svg>
);

export default SvgComponent;