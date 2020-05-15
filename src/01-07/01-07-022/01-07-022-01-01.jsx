import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 8h15v15H0z" />
    <path d="M9 9v8H7v-7H2v11h12V9h-1v8h-2V9H9z" fill="#fff" />
    <path d="M7 8h2V3s0 3 0 0-3-3-3-3H1v2h5S5 2 6 2s1 1 1 1v5z" />
    <path d="M2 4v4h4V4H2z" />
  </svg>
);

export default SvgComponent;
