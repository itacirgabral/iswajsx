import React from "react";

const SvgComponent = (props) => (
  <svg width={4} height={8} {...props}>
    <path d="M4 8V7C2.62 7 1.5 5.657 1.5 4S2.62 1 4 1V0a4 4 0 100 8z" />
  </svg>
);

export default SvgComponent;
