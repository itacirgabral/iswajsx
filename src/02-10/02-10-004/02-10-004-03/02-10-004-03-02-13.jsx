import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 20l5.5 5.5L11 20H0zm2.438 1h6.124L5.5 24.063 2.437 21z" />
    <path d="M10.5 40c2.485 0 4.5-3.806 4.5-8.5v-23C15 3.806 12.985 0 10.5 0h-2C6.015 0 3 3.806 3 8.5V13h5V8.5C8 4.358 9.12 2 10.5 2S13 4.358 13 8.5v23c0 4.142-1.12 6.5-2.5 6.5S8 35.642 8 31.5v-5H3v5C3 36.194 6.015 40 8.5 40h2z" />
    <path d="M2.438 21L5.5 24.063 8.563 21H2.436z" fill="#fff" />
    <path d="M0 14l5.5 5.5L11 14H0zm2.438 1h6.124L5.5 18.063 2.437 15z" />
    <path d="M2.438 15L5.5 18.063 8.563 15H2.436z" fill="#fff" />
  </svg>
);

export default SvgComponent;