import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={19} {...props}>
    <path d="M0 4h15v15H0z" />
    <path d="M7 1C6 1 6 2 6 2v2h3V2c0-1-1-1-1-1H7z" fill="#fff" />
    <path
      d="M10 4V2s0 2 0 0-2-2-2-2H7s2 0 0 0-2 2-2 2v2h1V2s0 1 0 0 1-1 1-1h1S7 1 8 1s1 1 1 1v2h1z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgComponent;
