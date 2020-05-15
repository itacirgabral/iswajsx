import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 21l8-8 8 8H0z" />
    <path d="M19 0v23a4 4 0 01-4 4c-1.657 0-3-2.686-3-6H4a8 8 0 008 8h3a6 6 0 006-6V0h-2z" />
  </svg>
);

export default SvgComponent;
