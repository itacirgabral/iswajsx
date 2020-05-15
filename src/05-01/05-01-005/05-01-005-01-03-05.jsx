import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 6h42v4H0V6zM53 4h-1v7h1V4z" />
    <path d="M50 2.5a2.5 2.5 0 105 0 2.5 2.5 0 10-5 0zM47 7h-1V0h1v7z" />
    <path d="M44 8.5a2.5 2.5 0 115 0 2.5 2.5 0 11-5 0z" />
  </svg>
);

export default SvgComponent;
