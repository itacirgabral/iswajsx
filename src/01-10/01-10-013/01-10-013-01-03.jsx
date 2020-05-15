import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M4 0v8h2V0H4zm5 0v8h2V0H9z" fill="#fff" />
  </svg>
);

export default SvgComponent;
