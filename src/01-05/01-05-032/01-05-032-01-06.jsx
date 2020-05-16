import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={18} {...props}>
    <path d="M8 0h8v18H8zM6 0v4H2v4H0V0h6z" />
    <path d="M1.625 5.813L.219 7.218 6 13v-2.813L1.625 5.814z" />
  </svg>
);

export default SvgComponent;
