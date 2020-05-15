import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 8h15v15H0z" />
    <path d="M7 9v8h2V9H7zm4 0v8h2V9h-2zm-9 1v11h6v-3H6v-8H2z" fill="#fff" />
    <path d="M7 8h2V3s0 3 0 0-3-3-3-3H1v2h5S5 2 6 2s1 1 1 1v5z" />
    <path d="M2 4v4h4V4H2z" />
  </svg>
);

export default SvgComponent;
