import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={29} {...props}>
    <path d="M21 21l-8-8-8 8h16z" />
    <path d="M2 0v23a4 4 0 004 4c1.657 0 3-2.686 3-6h8a8 8 0 01-8 8H6a6 6 0 01-6-6V0h2z" />
  </svg>
);

export default SvgComponent;
