import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={24} {...props}>
    <path d="M8 0L0 8h2.719l5.219-5.25L13.188 8H16L8 0zM7 8v16h17V8h-2v14H9V8H7z" />
  </svg>
);

export default SvgComponent;
