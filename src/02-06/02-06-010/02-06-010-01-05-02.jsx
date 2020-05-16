import React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={21} {...props}>
    <path d="M0 14l5 5 5-5H0zm2.438 1h5.124L5 17.563 2.437 15zM3 9a9 9 0 019-9h6v1h-6a8 8 0 00-8 8v5H3V9z" />
    <path d="M4 9a8 8 0 018-8h6v2h-6a6 6 0 00-6 6v5H4V9z" fill="#fff" />
    <path d="M6 9a6 6 0 016-6h6v1h-6a5 5 0 00-5 5v5H6V9zM22 3v10l5-5-5-5zm1 2.438L25.563 8 23 10.563V5.436z" />
    <path d="M19 6a9 9 0 00-9 9v6h1v-6a8 8 0 018-8h3V6h-3z" />
    <path d="M19 7a8 8 0 00-8 8v6h2v-6a6 6 0 016-6h3V7h-3z" fill="#fff" />
    <path d="M19 9a6 6 0 00-6 6v6h1v-6a5 5 0 015-5h3V9h-3z" />
    <path
      d="M2.438 15L5 17.563 7.563 15H2.438zM23 5.438v5.125L25.563 8 23 5.437z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
