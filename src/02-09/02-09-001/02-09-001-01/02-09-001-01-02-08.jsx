import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 5a5 5 0 015 5v2a5 5 0 01-5 5v-3a3 3 0 003-3V9a3 3 0 00-3-3H6V5h9zM6 0v11L.5 5.5 6 0zM5 2.438L1.937 5.5 5 8.563V2.436z" />
    <path d="M5 2.438v6.124L1.937 5.5 5 2.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
