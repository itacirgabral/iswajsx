import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={15} {...props}>
    <path d="M10 0a6 6 0 016 6v3a6 6 0 01-6 6H0v-4h11a3 3 0 003-3V6a4 4 0 00-4-4V0z" />
  </svg>
);

export default SvgComponent;
