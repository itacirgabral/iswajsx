import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M20 6L14.5.5 9 6h11zM15 6v6a4 4 0 01-4 4H7a7 7 0 01-7-7h9v2c0 1.657.895 3 2 3a3 3 0 003-3V6h1z" />
  </svg>
);

export default SvgComponent;