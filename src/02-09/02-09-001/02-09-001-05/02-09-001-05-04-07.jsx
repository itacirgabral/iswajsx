import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v2h28a6 6 0 016 6c0 2.21-2.686 4-6 4H18v4h10a8 8 0 100-16H0z" />
  </svg>
);

export default SvgComponent;
