import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={17} {...props}>
    <path d="M20 0v8a5 5 0 01-5 5H0v4h14a8 8 0 008-8V0h-2z" />
  </svg>
);

export default SvgComponent;
