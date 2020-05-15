import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h15v15H0z" />
    <path d="M0 11v3h15v-3H0z" fill="#fff" />
    <path d="M4 5v7h2V5H4zm5 0v7h2V5H9z" fill="#fff" />
    <path d="M5 0h4v4H5z" />
  </svg>
);

export default SvgComponent;
