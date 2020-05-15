import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v22h14V0L7 7 0 0z" />
    <path d="M2 4.813V20h6V8.844l-1 1-5-5.031z" fill="#fff" />
    <path d="M2 13h5v3H2z" />
  </svg>
);

export default SvgComponent;
