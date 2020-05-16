import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={16} {...props}>
    <path d="M7 13V9H3V7h4V3h2v4h4v2H9v4H7zM0 14h16v2H0zM0 0h16v2H0z" />
  </svg>
);

export default SvgComponent;
