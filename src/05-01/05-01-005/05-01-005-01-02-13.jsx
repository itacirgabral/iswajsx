import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M54 6H12V2h42v4zM9 7H8V0h1v7z" />
    <path d="M6 8.5a2.5 2.5 0 115 0 2.5 2.5 0 11-5 0zM3 7H2V0h1v7z" />
    <path d="M0 8.5a2.5 2.5 0 115 0 2.5 2.5 0 11-5 0z" />
  </svg>
);

export default SvgComponent;
