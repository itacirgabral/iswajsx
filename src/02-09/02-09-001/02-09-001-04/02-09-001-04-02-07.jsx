import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8l8 8V0zM7 2.438v11.124L1.406 8 7 2.437z" />
    <path d="M8 7v2h18a6 6 0 016 6v3a6 6 0 01-6 6H5v4h20a9 9 0 009-9v-4a8 8 0 00-8-8H8z" />
    <path d="M7 2.438L1.406 8 7 13.563V2.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;