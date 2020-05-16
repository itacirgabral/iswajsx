import React from "react";

const SvgComponent = (props) => (
  <svg width={59} height={11} {...props}>
    <path d="M0 3h42v4H0V3zM51 7h1V0h-1v7z" />
    <path d="M54 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0zM56 4h1v7h-1V4z" />
    <path d="M59 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0zM46 4h1v7h-1V4z" />
    <path d="M49 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z" />
  </svg>
);

export default SvgComponent;
