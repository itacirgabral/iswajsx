import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 0H0v1h4v4h1V0z" />
    <path d="M0 5c0-1.38.564-2.626 1.469-3.531l.687.687A4.01 4.01 0 001 5a4 4 0 108 0 3.975 3.975 0 00-2.219-3.563L7.22.563C8.853 1.385 10 3.046 10 5A5 5 0 010 5z" />
    <path d="M2 5c0-.828.332-1.582.875-2.125l.719.719A1.982 1.982 0 003 5a2 2 0 102.906-1.781l.438-.875C7.319 2.839 8 3.83 8 5a3 3 0 01-6 0z" />
  </svg>
);

export default SvgComponent;