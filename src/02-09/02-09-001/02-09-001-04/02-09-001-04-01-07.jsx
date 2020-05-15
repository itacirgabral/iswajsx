import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0v16L0 8l8-8z" />
    <path d="M8 7v2h18a6 6 0 016 6v3a6 6 0 01-6 6H5v4h20a9 9 0 009-9v-4a8 8 0 00-8-8H8z" />
  </svg>
);

export default SvgComponent;
