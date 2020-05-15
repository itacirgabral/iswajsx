import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0h8v18H8zM6 0v4H2v4H0V0h6zM6 16H2v-4H0v6h6v-2z" />
  </svg>
);

export default SvgComponent;
