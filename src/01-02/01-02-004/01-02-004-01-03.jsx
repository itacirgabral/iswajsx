import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h15v15H0z" />
    <path
      d="M0 4V2s0 2 0 0 2-2 2-2h1S1 0 3 0s2 2 2 2v2H4V2s0 1 0 0-1-1-1-1H2s1 0 0 0-1 1-1 1v2H0z"
      fillRule="evenodd"
    />
    <path
      d="M2 1C1 1 1 2 1 2v2h3V2.375 2c0-1-1-1-1-1h-.625H2zm3.844 0C5.563 1.047 5 1.25 5 2v2h3V2s0-1-1-1H6a.42.42 0 00-.156 0z"
      fill="#fff"
      fillRule="evenodd"
    />
    <path
      d="M9 4V2s0 2 0 0-2-2-2-2H6s2 0 0 0-2 2-2 2v2h1V2s0 1 0 0 1-1 1-1h1S6 1 7 1s1 1 1 1v2h1z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgComponent;
