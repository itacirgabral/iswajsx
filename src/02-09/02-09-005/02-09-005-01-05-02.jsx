import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 13l4.5 4.5L9 13H0zm2.438 1h4.124L4.5 16.094 2.437 14zM14 0C8.477 0 4 4.477 4 10v3h1v-3a9 9 0 019-9h6V0h-6z" />
    <path d="M2.438 14L4.5 16.094 6.563 14H2.438z" fill="#fff" />
  </svg>
);

export default SvgComponent;