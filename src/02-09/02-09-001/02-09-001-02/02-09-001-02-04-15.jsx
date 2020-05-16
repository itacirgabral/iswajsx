import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={15} {...props}>
    <path d="M15 0v2H6a4 4 0 00-4 4v2a3 3 0 003 3h15v4H6a6 6 0 01-6-6V6a6 6 0 016-6h9z" />
  </svg>
);

export default SvgComponent;
