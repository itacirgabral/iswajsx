import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={30} {...props}>
    <path d="M8 14a8 8 0 100 16 8 8 0 000-16zM7 0v12h2V0H7z" />
  </svg>
);

export default SvgComponent;
