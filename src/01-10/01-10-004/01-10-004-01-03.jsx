import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3 0h15v15H3zM2 0v10c0 2.03 1 2 1 2v3s-3 .05-3-5V0h2z" />
  </svg>
);

export default SvgComponent;