import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 0v2L2 7l5 5v2L0 7l7-7z" />
    <path d="M7 6v2h9a4 4 0 014 4v2a3 3 0 01-3 3H2v4h14a6 6 0 006-6v-3a6 6 0 00-6-6H7z" />
  </svg>
);

export default SvgComponent;
