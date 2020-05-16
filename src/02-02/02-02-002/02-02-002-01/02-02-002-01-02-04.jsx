import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={22} {...props}>
    <path d="M4 0a4 4 0 100 8 4 4 0 000-8zM11 7a4 4 0 100 8 4 4 0 000-8zM18 14a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

export default SvgComponent;
