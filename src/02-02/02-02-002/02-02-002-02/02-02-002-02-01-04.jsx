import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={12} {...props}>
    <path d="M3 0a3 3 0 100 6 3 3 0 000-6zM9 6a3 3 0 100 6 3 3 0 000-6z" />
  </svg>
);

export default SvgComponent;
