import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 15h15v15H9z" />
    <path d="M3 12s-3 0-3 3v3h2v-3c0-1 1-1 1-1h5c1 0 1 1 1 1h2s0-3-3-3H3zM15 15h2V0h-2v15z" />
    <path d="M2.594 8.906L0 10.406 9 26v-6L2.594 8.906z" />
  </svg>
);

export default SvgComponent;
