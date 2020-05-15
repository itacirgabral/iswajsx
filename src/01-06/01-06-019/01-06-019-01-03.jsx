import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 8h15v15H0z" />
    <path d="M15 0c4 0 4 4 4 4 0 5-4 8-4 8V8h-1c2-2 2-4 2-4 0-2-1-2-1-2-1 0-1.129 1.01-1 1v1h-2V3c0-3 3-3 3-3z" />
  </svg>
);

export default SvgComponent;
