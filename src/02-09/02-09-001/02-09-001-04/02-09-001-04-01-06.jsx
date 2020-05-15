import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 9h18l-9-9-9 9zM24 9v11a6 6 0 01-6 6H0v4h17a9 9 0 009-9V9h-2z" />
  </svg>
);

export default SvgComponent;
