import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 3h42v4H0V3zM51 4h1v7h-1V4z" />
    <path d="M54 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0zM56 7h1V0h-1v7z" />
    <path d="M59 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0zM46 7h1V0h-1v7z" />
    <path d="M49 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0z" />
  </svg>
);

export default SvgComponent;
