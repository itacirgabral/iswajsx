import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={21} {...props}>
    <path d="M2 0v11a6 6 0 006 6h18v4H9a9 9 0 01-9-9V0h2z" />
  </svg>
);

export default SvgComponent;
