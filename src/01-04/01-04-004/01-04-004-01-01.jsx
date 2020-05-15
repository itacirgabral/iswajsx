import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 0L0 7v15h14V7L7 0z" />
    <path d="M7 2.813l-5 5.03V20h10V7.844L7 2.812z" fill="#fff" />
    <path d="M5 12h7v3H5z" />
  </svg>
);

export default SvgComponent;
