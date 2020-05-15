import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 0v38.594l28 28L28.594 68 0 39.406V0h2z" />
    <path
      d="M3 0v38.188l27 26.968v1.438l-28-28V0h1zM0 39.406L28.594 68h-1.438L0 40.844v-1.438z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
