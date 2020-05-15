import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h42v4H0V4zM48 9V8h7v1h-7z" />
    <path d="M46.5 6a2.5 2.5 0 110 5 2.5 2.5 0 110-5zM51 3V2h-7v1h7z" />
    <path d="M52.5 0a2.5 2.5 0 110 5 2.5 2.5 0 110-5z" />
  </svg>
);

export default SvgComponent;
