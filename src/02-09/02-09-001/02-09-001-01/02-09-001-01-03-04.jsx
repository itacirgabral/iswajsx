import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={16} {...props}>
    <path d="M5 0a5 5 0 00-5 5v2a5 5 0 005 5h8V9H5a3 3 0 01-3-3V4a3 3 0 013-3V0zM13 5l5.5 5.5L13 16v-1.5l4-4-4-4V5z" />
  </svg>
);

export default SvgComponent;
