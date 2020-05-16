import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={26} {...props}>
    <path d="M10 0a6 6 0 016 6h-2a4 4 0 10-8 0v1a4.01 4.01 0 001.156 2.844l5.094 4.906A5.992 5.992 0 0114 19v1a6 6 0 01-6 6 8 8 0 01-8-8h2a6 6 0 006 6 4 4 0 004-4v-1a4.01 4.01 0 00-1.156-2.844L5.75 11.25A5.992 5.992 0 014 7V6a6 6 0 016-6z" />
  </svg>
);

export default SvgComponent;
