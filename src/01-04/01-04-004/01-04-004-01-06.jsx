import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 0L0 7v15h14V7L7 0z" />
    <path d="M0 8v3h14V8H0zM0 13h8v3H0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
