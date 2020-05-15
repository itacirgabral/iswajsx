import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 15h15v15H8z" />
    <path fill="#fff" d="M10 17h6v11h-6z" />
    <path d="M10 0H8v15h2V0z" />
    <path d="M3 14s-3 0-3 3v3h2v-3s0-1 1-1h3s2 0 2 2h2s0-4-4-4H3zM0 25v2s0 3 3 3h5v-2H3s-1 0-1-1v-2H0z" />
  </svg>
);

export default SvgComponent;
