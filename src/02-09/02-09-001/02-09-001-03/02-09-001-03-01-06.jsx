import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={25} {...props}>
    <path d="M13 8l8-8 8 8H13zM20 8v8a5 5 0 01-5 5H0v4h14a8 8 0 008-8V8h-2z" />
  </svg>
);

export default SvgComponent;
