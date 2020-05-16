import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={10} {...props}>
    <path d="M4 0v4H0v2h4v4h2V6h4V4H6V0H4z" />
  </svg>
);

export default SvgComponent;
