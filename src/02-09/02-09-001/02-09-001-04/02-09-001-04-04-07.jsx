import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3 0v2h18a6 6 0 016 6v3a6 6 0 01-6 6H0v4h20a9 9 0 009-9V8a8 8 0 00-8-8H3z" />
  </svg>
);

export default SvgComponent;