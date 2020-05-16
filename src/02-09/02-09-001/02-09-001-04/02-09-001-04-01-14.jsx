import React from "react";

const SvgComponent = (props) => (
  <svg width={34} height={30} {...props}>
    <path d="M18 9H0l9-9 9 9zM10 9v11a6 6 0 006 6h18v4H17a9 9 0 01-9-9V9h2z" />
  </svg>
);

export default SvgComponent;
