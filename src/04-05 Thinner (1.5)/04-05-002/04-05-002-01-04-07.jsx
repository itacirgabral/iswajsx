import React from "react";

const SvgComponent = (props) => (
  <svg width={5} height={5} {...props}>
    <path d="M5 2.5L2.75.25l-.719.719L3.062 2H0v1h3.063L2.03 4.031l.719.719L5 2.5z" />
  </svg>
);

export default SvgComponent;
