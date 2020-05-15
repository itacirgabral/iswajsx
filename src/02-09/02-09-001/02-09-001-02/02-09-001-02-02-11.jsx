import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 6v14l-7-7 7-7zM6 8.438L1.406 13 6 17.563V8.438z" />
    <path d="M17 0a6 6 0 016 6v3a6 6 0 01-6 6H7v-4h11a3 3 0 003-3V6a4 4 0 00-4-4H3V0h14z" />
    <path d="M6 8.438v9.124L1.406 13 6 8.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;