import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={24} {...props}>
    <path d="M8 0L0 8h16L8 0zM7 8v16h17v-2H9V8H7z" />
  </svg>
);

export default SvgComponent;
