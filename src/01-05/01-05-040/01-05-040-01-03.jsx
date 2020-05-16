import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={20} {...props}>
    <path d="M11 0v20c8 0 8-8 8-8V8c0-8-8-8-8-8zM11 4V0C2 0 2 8 2 8h2c0-4 7-4 7-4zM0 18h11v2H0z" />
  </svg>
);

export default SvgComponent;
