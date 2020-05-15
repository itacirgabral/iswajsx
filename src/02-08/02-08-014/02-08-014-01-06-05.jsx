import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4.5 13.5L9 18H8l-3.5-3.5L1 18H0l4.5-4.5z" />
    <path d="M11 0v17c0 1.657-.895 3-2 3a2 2 0 01-2-2H2a4 4 0 004 4h1a5 5 0 005-5V0h-1zM21.5.5L26 5h-1l-3.5-3.5L18 5h-1L21.5.5zM22 5v13a4 4 0 01-4 4 5 5 0 01-5-5h5c0 1.657.672 3 1.5 3s1.5-1.343 1.5-3V5h1z" />
  </svg>
);

export default SvgComponent;
