import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0h8v18H8z" />
    <path fill="#fff" d="M9 1h3v16H9z" />
    <path d="M8 0v4H2v4H0V0h8z" />
    <path d="M1.625 5.813L.219 7.218 8 15v-2.813L1.625 5.814z" />
  </svg>
);

export default SvgComponent;
