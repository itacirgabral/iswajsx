import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 3h15v15H0z" />
    <path
      d="M2 2v9h2V2s0-1-1-1-1 1-1 1zm3 0v9h2V2s0-1-1-1-1 1-1 1z"
      fill="#fff"
    />
    <path d="M3 0S1 0 1 2v10h4V2s0-2-2-2zm0 1c1 0 1 1 1 1v9H2V2s0-1 1-1z" />
    <path d="M6 0S4 0 4 2v10h4V2s0-2-2-2zm0 1c1 0 1 1 1 1v9H5V2s0-1 1-1z" />
  </svg>
);

export default SvgComponent;
