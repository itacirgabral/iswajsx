import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M55 6H13v4h42V6zM7 9V8H0v1h7z" />
    <path d="M8.5 6a2.5 2.5 0 110 5 2.5 2.5 0 110-5zM7 3V2H0v1h7z" />
    <path d="M8.5 0a2.5 2.5 0 110 5 2.5 2.5 0 110-5zM7 15v-1H0v1h7z" />
    <path d="M8.5 12a2.5 2.5 0 110 5 2.5 2.5 0 110-5z" />
  </svg>
);

export default SvgComponent;
