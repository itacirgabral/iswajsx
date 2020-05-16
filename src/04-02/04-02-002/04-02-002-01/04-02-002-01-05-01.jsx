import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={8} {...props}>
    <path d="M7 0l5 5-.719.719L6.594 1H0V0h7z" />
    <path d="M5.406 3L9.72 7.281 9 8 5 4H1V3h4.406z" />
  </svg>
);

export default SvgComponent;
