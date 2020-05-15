import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M55 4H13v4h42V4zM4 9V8h7v1H4z" />
    <path d="M2.5 6a2.5 2.5 0 110 5 2.5 2.5 0 110-5zM7 3V2H0v1h7z" />
    <path d="M8.5 0a2.5 2.5 0 110 5 2.5 2.5 0 110-5z" />
  </svg>
);

export default SvgComponent;
