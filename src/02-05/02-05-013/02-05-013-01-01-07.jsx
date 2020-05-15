import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M25 8H0v2h25V8zM11 0L7.5 3.5 11 7V0zM25 16V2l7 7-7 7z" />
    <path d="M11 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3H8v3h5a6 6 0 000-12h-2z" />
  </svg>
);

export default SvgComponent;