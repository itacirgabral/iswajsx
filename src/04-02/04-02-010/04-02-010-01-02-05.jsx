import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 5V0H8v4H4v1h5z" />
    <path d="M3.5 0a3.48 3.48 0 012.469 1.031l1 1-.719.719-1-1C4.798 1.298 4.19 1 3.5 1A2.5 2.5 0 001 3.5V6H0V3.5A3.5 3.5 0 013.5 0zM21 5V0h-1v4h-4v1h5z" />
    <path d="M15.5 0a3.48 3.48 0 012.469 1.031l1 1-.719.719-1-1C16.798 1.298 16.19 1 15.5 1A2.5 2.5 0 0013 3.5V6h-1V3.5A3.5 3.5 0 0115.5 0z" />
  </svg>
);

export default SvgComponent;