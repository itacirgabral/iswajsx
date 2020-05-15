import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 9h15v13H10z" />
    <path fill="#fff" d="M12 11h11v9H12z" />
    <path d="M13 7h2V4c0-3.99-4-4-4-4H9s4 0 0 0-4 4-4 4h2s0 2 0 0 2-2 2-2h2s-2 0 0 0 2 2 2 2v3z" />
    <path d="M12 7s0 4 0 0-4-4-4-4H6s4 0 0 0-4 4-4 4v3h2V7s0 2 0 0 2-2 2-2h2S6 5 8 5s2 2 2 2h2z" />
    <path d="M1.5 6.688L.094 8.094 9 17v-2.813l-7.5-7.5z" />
  </svg>
);

export default SvgComponent;