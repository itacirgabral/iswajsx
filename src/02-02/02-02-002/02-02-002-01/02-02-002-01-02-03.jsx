import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={28} {...props}>
    <path d="M4 0a4 4 0 100 8 4 4 0 000-8zM4 10a4 4 0 100 8 4 4 0 000-8zM4 20a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

export default SvgComponent;
