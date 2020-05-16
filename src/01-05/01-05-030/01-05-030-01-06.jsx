import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={18} {...props}>
    <path d="M11 0h8v18h-8zM3 0v8h2V4h4V0H3zM0 16h9v2H0z" />
  </svg>
);

export default SvgComponent;
