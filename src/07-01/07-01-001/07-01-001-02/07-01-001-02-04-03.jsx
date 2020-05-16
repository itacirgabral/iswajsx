import React from "react";

const SvgComponent = (props) => (
  <svg width={11} height={59} {...props}>
    <path d="M1 7v52h8V7H1z" />
    <path d="M1 2v5h8V2H1z" fill="#fff" />
    <path d="M3.5 0C0 0 0 4 0 4h2s0-2 1.5-2 1.5 2 4 2C11 4 11 0 11 0H9s0 2-1.5 2-1.5-2-4-2z" />
  </svg>
);

export default SvgComponent;
