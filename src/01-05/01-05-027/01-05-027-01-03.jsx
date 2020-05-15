import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0h8v18H8zM8 0v4H2v4H0V0h8zM8 16H2v-4H0v6h8v-2z" />
  </svg>
);

export default SvgComponent;
