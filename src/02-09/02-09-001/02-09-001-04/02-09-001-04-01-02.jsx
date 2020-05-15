import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 18h18l-9 9-9-9zM16 0a9 9 0 00-9 9v9h4V8a6 6 0 016-6h17V0H16z" />
  </svg>
);

export default SvgComponent;
