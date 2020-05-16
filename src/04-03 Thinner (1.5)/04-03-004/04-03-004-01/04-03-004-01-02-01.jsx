import React from "react";

const SvgComponent = (props) => (
  <svg width={3} height={12} {...props}>
    <path d="M.75 0v12h1.5V0H.75z" />
  </svg>
);

export default SvgComponent;
