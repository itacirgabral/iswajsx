import React from "react";

const SvgComponent = (props) => (
  <svg width={33} height={34} {...props}>
    <path d="M8 0L0 8h2.719l5.219-5.25L13.188 8H16L8 0zM4 8v26h29V8h-2v24H6V8H4z" />
    <path d="M10 8v20h17V8h-2v18H12V8h-2z" />
    <path d="M6 8v24h25V8h-4v20H10V8H6z" fill="#fff" />
  </svg>
);

export default SvgComponent;
