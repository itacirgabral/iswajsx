import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M55 6H13v4h42V6zM2 4h1v7H2V4z" />
    <path d="M5 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0zM8 7h1V0H8v7z" />
    <path d="M11 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0z" />
  </svg>
);

export default SvgComponent;
