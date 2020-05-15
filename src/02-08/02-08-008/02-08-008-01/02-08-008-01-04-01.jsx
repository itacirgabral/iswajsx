import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 6L5.5.5 11 6H0zM5 6v6a4 4 0 004 4h4a7 7 0 007-7h-9v2c0 1.657-.895 3-2 3a3 3 0 01-3-3V6H5z" />
  </svg>
);

export default SvgComponent;