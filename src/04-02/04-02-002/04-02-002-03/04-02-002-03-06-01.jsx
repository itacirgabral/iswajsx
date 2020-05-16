import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={8} {...props}>
    <path d="M7 8l5-5-.719-.719L6.594 7H0v1h7z" />
    <path d="M5.406 5L9.72.719 9 0 5 4H0v1h5.406z" />
  </svg>
);

export default SvgComponent;
