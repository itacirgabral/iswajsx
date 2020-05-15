import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M24 6l-6 6-6-6h12z" />
    <path d="M13 0a6 6 0 016 6h-2a4 4 0 10-8 0v1a4.01 4.01 0 001.156 2.844l5.094 4.906A5.992 5.992 0 0117 19v1a6 6 0 01-6 6H8a8 8 0 01-8-8h8c0 2.761 1.343 5 3 5 2.21 0 4-1.343 4-3v-1a4.01 4.01 0 00-1.156-2.844L8.75 11.25A5.992 5.992 0 017 7V6a6 6 0 016-6z" />
  </svg>
);

export default SvgComponent;