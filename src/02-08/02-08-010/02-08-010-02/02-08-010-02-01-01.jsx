import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={32} {...props}>
    <path d="M0 8l8-8 8 8H0zM7 8v20a4 4 0 004 4h4a8 8 0 008-8H13v3c0 1.657-.895 3-2 3a2 2 0 01-2-2v-7.563c.591.342 1.267.563 2 .563a4 4 0 100-8c-.733 0-1.409.22-2 .563V8H7zm4 7a2 2 0 110 4 2 2 0 010-4z" />
  </svg>
);

export default SvgComponent;
