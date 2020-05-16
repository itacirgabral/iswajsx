import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={22} {...props}>
    <path d="M8 0L0 8h2l6-6 6 6h2L8 0zM9 8v6a4 4 0 004 4h13v4H14a7 7 0 01-7-7V8h2z" />
  </svg>
);

export default SvgComponent;
