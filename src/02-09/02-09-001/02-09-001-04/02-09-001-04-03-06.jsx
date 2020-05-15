import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M25 0l9 9h-2l-7-7-7 7h-2l9-9zM24 9v11a6 6 0 01-6 6H0v4h17a9 9 0 009-9V9h-2z" />
  </svg>
);

export default SvgComponent;
