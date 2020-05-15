import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 11h15v15H0z" />
    <path fill="#fff" d="M2 13h11v11H2z" />
    <path d="M14 0a3 3 0 00-3 3c0 1.301.842 2.397 2 2.813V11h2V5.812c1.158-.415 2-1.51 2-2.812a3 3 0 00-3-3zM15 17v2h9v-2h-9z" />
  </svg>
);

export default SvgComponent;