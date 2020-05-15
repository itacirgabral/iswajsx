import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v10h12V8H2V0H0z" />
  </svg>
);

export default SvgComponent;