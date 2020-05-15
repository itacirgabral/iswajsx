import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 9h15v15H0z" />
    <path d="M2 11v1H0v3h2v7h6v-7h7v-3H8v-1H2z" fill="#fff" />
    <path d="M7 0h2v9H7z" />
  </svg>
);

export default SvgComponent;