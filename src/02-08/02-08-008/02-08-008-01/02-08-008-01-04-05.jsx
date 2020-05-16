import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={16} {...props}>
    <path d="M0 10l6-6 6 6H0z" />
    <path d="M16 0v10a4 4 0 01-4 4c-1.657 0-3-1.79-3-4H3a6 6 0 006 6h3a5 5 0 005-5V0h-1z" />
  </svg>
);

export default SvgComponent;
