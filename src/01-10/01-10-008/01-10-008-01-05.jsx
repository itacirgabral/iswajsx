import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h15v15H0z" />
    <path d="M2 6v4H0v3h2v4h6v-4h7v-3H8V6H2z" fill="#fff" />
    <path d="M4 6v6h2V6H4zM5 0h4v4H5z" />
  </svg>
);

export default SvgComponent;
