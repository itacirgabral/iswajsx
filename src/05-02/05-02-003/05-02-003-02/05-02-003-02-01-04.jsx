import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={10} {...props}>
    <path d="M1.464.05L.05 1.466 8.536 9.95 9.95 8.536 1.464.05z" />
  </svg>
);

export default SvgComponent;
