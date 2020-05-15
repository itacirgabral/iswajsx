import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 7h15v15H6zM1 0L.4 1.5 16 7h5L1 0z" />
    <path d="M8 9v2H6v3h2v6h6v-6h7v-3h-7V9H8z" fill="#fff" />
  </svg>
);

export default SvgComponent;
