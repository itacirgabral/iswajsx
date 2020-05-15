import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 14h15v13H0z" />
    <path fill="#fff" d="M2 16h11v9H2z" />
    <path d="M15 12V4s0 4 0 0-4-4-4-4H3v2h8s-2 0 0 0 2 2 2 2v8h2z" />
    <path d="M9 12h2V7s0 3 0 0-3-3-3-3H1v2h7S7 6 8 6s1 1 1 1v5z" />
  </svg>
);

export default SvgComponent;