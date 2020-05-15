import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 6h25v2H7V6zM22 9l3.5 3.5L22 16V9zM7 14V0L0 7l7 7z" />
    <path d="M22 2v1h-3a5 5 0 00-5 5c0 1.657 2.239 3 5 3h3v3h-3a6 6 0 010-12h3z" />
  </svg>
);

export default SvgComponent;
