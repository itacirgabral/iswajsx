import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 9h15v13H9zM12 7h2V4c0-3.99-4-4-4-4H8s4 0 0 0-4 4-4 4h2s0 2 0 0 2-2 2-2h2s-2 0 0 0 2 2 2 2v3z" />
    <path d="M11 7s0 4 0 0-4-4-4-4H4s4 0 0 0-4 4-4 4v2h2V7s0 2 0 0 2-2 2-2h3S5 5 7 5s2 2 2 2h2zM0 9s0 4 4 4h4v-2H4s-2 0-2-2H0z" />
  </svg>
);

export default SvgComponent;
