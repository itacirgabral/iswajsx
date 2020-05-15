import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 0L0 7l7 7V0zM6 2.438v9.124L1.406 7 6 2.437z" />
    <path d="M7 6v2h9a4 4 0 014 4v2a3 3 0 01-3 3H2v4h14a6 6 0 006-6v-3a6 6 0 00-6-6H7z" />
    <path d="M6 2.438L1.406 7 6 11.563V2.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
