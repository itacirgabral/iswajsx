import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v6h9V0H0zm1 1.5h7v3H1v-3z" />
    <rect width={2} x={4} y={1} />
  </svg>
);

export default SvgComponent;
