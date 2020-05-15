import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3 0v3H0v1h3v2H0v1h3v5h1V7h3V6H4V4h3V3H4V0H3z" />
  </svg>
);

export default SvgComponent;