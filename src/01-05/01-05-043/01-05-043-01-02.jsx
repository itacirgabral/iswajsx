import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 8A8 8 0 110 8a8 8 0 1116 0z" />
    <path d="M8 2a6 6 0 100 12V2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
