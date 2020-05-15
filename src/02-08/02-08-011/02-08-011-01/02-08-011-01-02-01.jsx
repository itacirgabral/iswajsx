import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 6l6 6 6-6H0zm2.438 1h7.124L6 10.563 2.437 7z" />
    <path d="M11 0a6 6 0 00-6 6h2a4 4 0 118 0v1a4.01 4.01 0 01-1.156 2.844L8.75 14.75A5.992 5.992 0 007 19v1a6 6 0 006 6h3a8 8 0 008-8h-8c0 2.761-1.343 5-3 5-2.21 0-4-1.343-4-3v-1a4.01 4.01 0 011.156-2.844l5.094-4.906A5.992 5.992 0 0017 7V6a6 6 0 00-6-6z" />
    <path d="M2.438 7L6 10.563 9.563 7H2.436z" fill="#fff" />
  </svg>
);

export default SvgComponent;