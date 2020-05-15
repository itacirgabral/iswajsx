import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 7h15v15H0zM14 0c-1.656 0-3 1.344-3 3 0 1.3.842 2.397 2 2.813V7h2V5.812c1.158-.415 2-1.511 2-2.812 0-1.656-1.344-3-3-3z" />
    <path d="M2 9v2H0v3h2v6h11v-6h2v-3h-2V9H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;