import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={19} {...props}>
    <path d="M0 4h15v15H0z" />
    <path
      d="M4 1C3 1 3 2 3 2v2h3V2c0-1-1-1-1-1H4zm4 0C7 1 7 2 7 2v2h3V2c0-1-1-1-1-1H8zM2 6v11h6V6H2z"
      fill="#fff"
    />
    <path d="M8 0s-.908.017-1.5.625c.289.296.5.72.5 1.375 0 0 0-1 1-1h1s1 0 1 1v2h1V2s0-2-2-2H8z" />
    <path
      d="M7 4V2s0 2 0 0-2-2-2-2H4s2 0 0 0-2 2-2 2v2h1V2s0 1 0 0 1-1 1-1h1S4 1 5 1s1 1 1 1v2h1z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgComponent;
