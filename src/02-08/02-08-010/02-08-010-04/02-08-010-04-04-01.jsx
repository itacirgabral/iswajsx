import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v28a4 4 0 004 4 8 8 0 008-8h-2a6 6 0 01-6 6 2 2 0 01-2-2v-6.563c.591.342 1.267.563 2 .563a4 4 0 100-8c-.733 0-1.409.22-2 .563v-3.126c.591.342 1.267.563 2 .563a4 4 0 100-8c-.733 0-1.409.22-2 .563V0H0zm4 6a2 2 0 110 4 2 2 0 010-4zm0 10a2 2 0 110 4 2 2 0 010-4z" />
  </svg>
);

export default SvgComponent;
