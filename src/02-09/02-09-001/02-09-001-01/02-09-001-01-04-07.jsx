import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 0a5 5 0 015 5v2a5 5 0 01-5 5H0V9h12a3 3 0 003-3V4a3 3 0 00-3-3H3V0h9z" />
  </svg>
);

export default SvgComponent;
