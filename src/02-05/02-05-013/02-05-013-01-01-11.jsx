import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M25 6H0v2h25V6zM10 9l-3.5 3.5L10 16V9zM25 14V0l7 7-7 7z" />
    <path d="M10 2v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-3v3h3a6 6 0 000-12h-3z" />
  </svg>
);

export default SvgComponent;
