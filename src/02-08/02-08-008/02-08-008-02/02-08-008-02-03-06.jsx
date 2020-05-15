import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 13l8 8h-2l-6-6-6 6H5l8-8z" />
    <path d="M2 0v23a4 4 0 004 4c1.657 0 3-2.686 3-6h8a8 8 0 01-8 8H6a6 6 0 01-6-6V0h2z" />
  </svg>
);

export default SvgComponent;
