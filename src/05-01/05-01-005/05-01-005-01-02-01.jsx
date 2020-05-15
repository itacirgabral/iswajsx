import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 5h42v4H0V5zM45 4h1v7h-1V4z" />
    <path d="M48 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0zM51 4h1v7h-1V4z" />
    <path d="M54 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z" />
  </svg>
);

export default SvgComponent;
