import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h15v15H0z" />
    <path d="M0 11v3h15v-3H0zM2 5v6h2V5H2zm4 0v6h2V5H6z" fill="#fff" />
    <path d="M9 0h4v4H9z" />
  </svg>
);

export default SvgComponent;
