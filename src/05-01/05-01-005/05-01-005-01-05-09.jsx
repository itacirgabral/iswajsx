import React from "react";

const SvgComponent = (props) => (
  <svg width={59} height={11} {...props}>
    <path d="M59 3H17v4h42V3zM8 7H7V0h1v7z" />
    <path d="M5 8.5a2.5 2.5 0 115 0 2.5 2.5 0 11-5 0zM3 4H2v7h1V4z" />
    <path d="M0 2.5a2.5 2.5 0 105 0 2.5 2.5 0 10-5 0zM13 4h-1v7h1V4z" />
    <path d="M10 2.5a2.5 2.5 0 105 0 2.5 2.5 0 10-5 0z" />
  </svg>
);

export default SvgComponent;
