import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 2v1H0V2h7z" />
    <path d="M8.5 5a2.5 2.5 0 110-5 2.5 2.5 0 110 5z" />
  </svg>
);

export default SvgComponent;
