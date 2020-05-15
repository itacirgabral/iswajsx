import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13.5 13.5L18 18h-1l-3.5-3.5L10 18H9l4.5-4.5z" />
    <path d="M20 0v17c0 1.657-.895 3-2 3a2 2 0 01-2-2h-5a4 4 0 004 4h1a5 5 0 005-5V0h-1zM8.5.5L13 5h-1L8.5 1.5 5 5H4L8.5.5zM9 5v13a4 4 0 01-4 4 5 5 0 01-5-5h5c0 1.657.672 3 1.5 3S8 18.657 8 17V5h1z" />
  </svg>
);

export default SvgComponent;