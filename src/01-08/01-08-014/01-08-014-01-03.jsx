import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 14a8 8 0 100 16 8 8 0 000-16z" />
    <path d="M7 0v14.063a8.016 8.016 0 012 0V0H7z" />
  </svg>
);

export default SvgComponent;