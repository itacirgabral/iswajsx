import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={18} {...props}>
    <path d="M0 13l4.5 4.5L9 13H7.562L4.5 16.063 1.437 13H0zM14 0C8.477 0 4 4.477 4 10v3h1v-3a9 9 0 019-9h6V0h-6z" />
  </svg>
);

export default SvgComponent;
