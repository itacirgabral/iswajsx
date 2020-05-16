import React from "react";

const SvgComponent = (props) => (
  <svg width={54} height={11} {...props}>
    <path d="M0 6h42V2H0v4zM45 7h1V0h-1v7z" />
    <path d="M48 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0zM51 7h1V0h-1v7z" />
    <path d="M54 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0z" />
  </svg>
);

export default SvgComponent;
