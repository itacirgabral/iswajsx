import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M55 1H13v4h42V1zM7 3V2H0v1h7z" />
    <path d="M8.5 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
  </svg>
);

export default SvgComponent;
