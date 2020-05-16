import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={12} {...props}>
    <path d="M12 0a5 5 0 015 5v2a5 5 0 01-5 5H4V9h8a3 3 0 003-3V4a3 3 0 00-3-3H0V0h12z" />
  </svg>
);

export default SvgComponent;
