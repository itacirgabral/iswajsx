import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={32} {...props}>
    <path d="M12 0v28a4 4 0 01-4 4 8 8 0 01-8-8h2a6 6 0 006 6 2 2 0 002-2v-6.563C9.409 21.78 8.733 22 8 22a4 4 0 110-8c.733 0 1.409.22 2 .563v-3.126C9.409 11.78 8.733 12 8 12a4 4 0 110-8c.733 0 1.409.22 2 .563V0h2zM8 6a2 2 0 100 4 2 2 0 000-4zm0 10a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

export default SvgComponent;
