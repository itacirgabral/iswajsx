import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h15v15H0z" />
    <path
      d="M12 1c-1 0-1 1-1 1v2h3V2.375 2c0-1-1-1-1-1h-.625H12zM2 6v11h11V6H2z"
      fill="#fff"
    />
    <path
      d="M15 4V2s0 2 0 0-2-2-2-2h-1s2 0 0 0-2 2-2 2v2h1V2s0 1 0 0 1-1 1-1h1s-1 0 0 0 1 1 1 1v2h1z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgComponent;