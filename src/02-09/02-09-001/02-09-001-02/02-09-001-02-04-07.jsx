import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={15} {...props}>
    <path d="M5 0v2h9a4 4 0 014 4v2a3 3 0 01-3 3H0v4h14a6 6 0 006-6V6a6 6 0 00-6-6H5z" />
  </svg>
);

export default SvgComponent;
