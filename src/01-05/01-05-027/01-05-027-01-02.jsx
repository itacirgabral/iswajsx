import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={18} {...props}>
    <path d="M8 0h8v18H8z" />
    <path fill="#fff" d="M9 1h3v16H9z" />
    <path d="M8 0v4H2v4H0V0h8zM8 16H2v-4H0v6h8v-2z" />
  </svg>
);

export default SvgComponent;
