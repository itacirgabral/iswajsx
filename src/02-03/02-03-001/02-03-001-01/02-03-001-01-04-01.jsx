import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h2v8H0V0zM5 0h2v8H5V0z" />
    <path d="M2 0v8h3V0H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
