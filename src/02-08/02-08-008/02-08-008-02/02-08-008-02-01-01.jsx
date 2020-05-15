import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 8l8-8 8 8H0zM7 8v17a4 4 0 004 4h4a8 8 0 008-8H13v3c0 1.657-.895 3-2 3a2 2 0 01-2-2V8H7z" />
  </svg>
);

export default SvgComponent;