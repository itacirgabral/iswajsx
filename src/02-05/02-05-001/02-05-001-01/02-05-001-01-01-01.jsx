import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={15} {...props}>
    <path d="M7 0L0 7h14L7 0zM6 7h2v8H6V7z" />
  </svg>
);

export default SvgComponent;
