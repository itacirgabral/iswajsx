import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 8h15v15H0z" />
    <path d="M2 9v6h2V9H2zm4 0v6h2V9H6zm-6 7v2h15v-2H0z" fill="#fff" />
    <path d="M8 8H6V3s0 3 0 0 3-3 3-3h5v2H9s1 0 0 0-1 1-1 1v5z" />
    <path d="M9 4v4h4V4H9z" />
  </svg>
);

export default SvgComponent;