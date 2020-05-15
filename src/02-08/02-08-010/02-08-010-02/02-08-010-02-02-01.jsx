import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h16L8 0zm0 1.438L13.594 7H2.406L8 1.437zM7 8v20a4 4 0 004 4h4a8 8 0 008-8H13v3c0 1.657-.895 3-2 3a2 2 0 01-2-2v-7.563c.591.342 1.267.563 2 .563a4 4 0 100-8c-.733 0-1.409.22-2 .563V8H7zm4 7a2 2 0 110 4 2 2 0 010-4z" />
    <path d="M8 1.438L2.406 7h11.188L8 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
