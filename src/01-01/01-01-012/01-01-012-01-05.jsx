import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={29} {...props}>
    <path d="M1 14h15v15H1z" />
    <path d="M3 16v2H1v3h2v6h6v-6h7v-3H9v-2H3z" fill="#fff" />
    <path d="M13 14h3L2 0 .5 1.5 13 14z" fillRule="evenodd" />
  </svg>
);

export default SvgComponent;
