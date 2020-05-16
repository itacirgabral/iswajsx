import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={30} {...props}>
    <path d="M9 15h15v15H9z" />
    <path fill="#fff" d="M11 17h6v11h-6z" />
    <path d="M3 12s-3 0-3 3v3h2v-3c0-1 1-1 1-1h5c1 0 1 1 1 1h2s0-3-3-3H3zM15 15h2V0h-2v15z" />
    <path d="M2.594 8.906L0 10.406 9 26v-6L2.594 8.906z" />
  </svg>
);

export default SvgComponent;
