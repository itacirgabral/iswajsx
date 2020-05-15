import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M25 8H0v2h25V8zM16 0l3.5 3.5L16 7V0zM25 16V2l7 7-7 7z" />
    <path d="M16 3v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2z" />
  </svg>
);

export default SvgComponent;
