import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17 10l-6-6-6 6h12z" />
    <path d="M1 0v10a4 4 0 004 4c1.657 0 3-1.79 3-4h6a6 6 0 01-6 6H5a5 5 0 01-5-5V0h1z" />
  </svg>
);

export default SvgComponent;
