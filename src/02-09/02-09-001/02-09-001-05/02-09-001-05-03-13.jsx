import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 0v2l5 5-5 5v2l7-7-7-7z" />
    <path d="M37 6a8 8 0 010 16H8A8 8 0 118 6h8v2H8a6 6 0 00-6 6c0 2.21 2.686 4 6 4h29c3.314 0 6-1.79 6-4a6 6 0 00-6-6h-9V6h9z" />
  </svg>
);

export default SvgComponent;
