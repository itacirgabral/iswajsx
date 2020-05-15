import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 8h14l-7 7-7-7z" />
    <path d="M11 0a5 5 0 00-5 5v3h2V5a3 3 0 013-3h1a4 4 0 014 4v9c0 4.028-5 11-5 11h12s-5-6.972-5-11V6a6 6 0 00-6-6h-1z" />
  </svg>
);

export default SvgComponent;
