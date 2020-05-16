import React from "react";

const SvgComponent = (props) => (
  <svg width={36} height={16} {...props}>
    <path d="M8 0a8 8 0 000 16h28v-4H8c-3.314 0-6-1.79-6-4a6 6 0 016-6h6V0H8z" />
  </svg>
);

export default SvgComponent;
