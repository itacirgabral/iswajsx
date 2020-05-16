import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={6} {...props}>
    <path d="M0 0v6h10V0H9v4.5H7V0H6v4.5H4V0H3v4.5H1V0H0z" />
  </svg>
);

export default SvgComponent;
