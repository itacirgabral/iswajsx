import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 10h15v15H9zM1 0v2h8s4 0 4 4v4h2V6s0-6-6-6H1z" />
    <path d="M1 3v2h6s2 0 2 2v3h2V7s0-4-4-4H1zM0 17h9v2H0z" />
  </svg>
);

export default SvgComponent;
