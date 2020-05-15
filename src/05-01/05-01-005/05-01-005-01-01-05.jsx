import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 7h42V3H0v4zM46 7h1V0h-1v7z" />
    <path d="M49 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" />
  </svg>
);

export default SvgComponent;
