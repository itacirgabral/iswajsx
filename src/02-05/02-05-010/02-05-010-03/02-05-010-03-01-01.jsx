import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={28} {...props}>
    <path d="M8 0L0 8h16L8 0zM7 8v20h22V8h-2v18H9V8H7z" />
  </svg>
);

export default SvgComponent;
