import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M19.5 13.5L24 18h-1l-3.5-3.5L16 18h-1l4.5-4.5z" />
    <path d="M13 0v17c0 1.657.895 3 2 3a2 2 0 002-2h5a4 4 0 01-4 4h-1a5 5 0 01-5-5V0h1zM7.5 13.5L12 18h-1l-3.5-3.5L4 18H3l4.5-4.5z" />
    <path d="M1 0v17c0 1.657.895 3 2 3a2 2 0 002-2h5a4 4 0 01-4 4H5a5 5 0 01-5-5V0h1z" />
  </svg>
);

export default SvgComponent;
