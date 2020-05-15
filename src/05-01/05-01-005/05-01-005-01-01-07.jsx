import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 1h42v4H0V1zM51 2v1h-7V2h7z" />
    <path d="M52.5 5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
);

export default SvgComponent;
