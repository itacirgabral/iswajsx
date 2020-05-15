import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 3.5L3.5 0l.719.719L1.406 3.5 4.22 6.281 3.5 7 0 3.5z" />
    <path d="M3 3v1h4v4h1V3H3z" />
  </svg>
);

export default SvgComponent;