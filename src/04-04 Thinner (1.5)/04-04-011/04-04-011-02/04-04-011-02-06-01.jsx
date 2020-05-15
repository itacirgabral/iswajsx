import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 8V7C2.62 7 1.5 5.657 1.5 4S2.62 1 4 1V0a4 4 0 100 8z" />
    <path d="M8 8V7C6.62 7 5.5 5.657 5.5 4S6.62 1 8 1V0a4 4 0 100 8z" />
  </svg>
);

export default SvgComponent;