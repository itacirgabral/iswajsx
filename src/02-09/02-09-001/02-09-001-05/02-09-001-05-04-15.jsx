import React from "react";

const SvgComponent = (props) => (
  <svg width={36} height={16} {...props}>
    <path d="M36 0v2H8a6 6 0 00-6 6c0 2.21 2.686 4 6 4h10v4H8A8 8 0 118 0h28z" />
  </svg>
);

export default SvgComponent;
