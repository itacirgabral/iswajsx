import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={21} {...props}>
    <path d="M24 0v11a6 6 0 01-6 6H0v4h17a9 9 0 009-9V0h-2z" />
  </svg>
);

export default SvgComponent;
