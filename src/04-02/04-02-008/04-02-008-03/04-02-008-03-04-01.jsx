import React from "react";

const SvgComponent = (props) => (
  <svg width={7} height={7} {...props}>
    <path d="M3.5 0L0 3.5l.719.719L3.5 1.406 6.281 4.22 7 3.5 3.5 0z" />
    <path d="M3 3v4h1V3H3z" />
  </svg>
);

export default SvgComponent;
