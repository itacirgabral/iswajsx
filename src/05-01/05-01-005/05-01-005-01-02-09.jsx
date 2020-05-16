import React from "react";

const SvgComponent = (props) => (
  <svg width={54} height={11} {...props}>
    <path d="M54 5H12v4h42V5zM9 4H8v7h1V4z" />
    <path d="M6 2.5a2.5 2.5 0 105 0 2.5 2.5 0 10-5 0zM3 4H2v7h1V4z" />
    <path d="M0 2.5a2.5 2.5 0 105 0 2.5 2.5 0 10-5 0z" />
  </svg>
);

export default SvgComponent;
