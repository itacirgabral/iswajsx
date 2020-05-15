import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0h8v18H8z" />
    <path fill="#fff" d="M9 1h3v16H9z" />
    <path d="M8 0v4H2v4H0V0h8z" />
  </svg>
);

export default SvgComponent;
