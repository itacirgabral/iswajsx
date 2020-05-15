import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6.5 6.414L5.086 5 .136 9.95l1.415 1.414z" />
    <path d="M6.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
  </svg>
);

export default SvgComponent;
