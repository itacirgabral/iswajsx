import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={17} {...props}>
    <path d="M2 0v8a5 5 0 005 5h15v4H8a8 8 0 01-8-8V0h2z" />
  </svg>
);

export default SvgComponent;
