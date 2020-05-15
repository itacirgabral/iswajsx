import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0a4 4 0 00-4 4v1h1V4a3 3 0 013-3c2.21 0 4 2.686 4 6v1c0 2.981-4 8-4 8h11s-4-5.019-4-8V7a7 7 0 00-7-7z" />
    <path d="M0 5l5.5 5.5L11 5H0zm2.438 1h6.124L5.5 9.094 2.437 6z" />
    <path d="M2.438 6L5.5 9.094 8.563 6H2.436z" fill="#fff" />
  </svg>
);

export default SvgComponent;
