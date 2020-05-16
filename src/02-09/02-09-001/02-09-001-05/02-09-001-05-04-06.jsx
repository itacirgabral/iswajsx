import React from "react";

const SvgComponent = (props) => (
  <svg width={45} height={16} {...props}>
    <path d="M8 0a8 8 0 000 16h6v-4H8c-3.314 0-6-1.79-6-4a6 6 0 016-6h29a6 6 0 016 6c0 2.21-2.686 4-6 4h-7v4h7a8 8 0 100-16H8z" />
  </svg>
);

export default SvgComponent;
