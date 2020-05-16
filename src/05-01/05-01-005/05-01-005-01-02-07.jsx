import React from "react";

const SvgComponent = (props) => (
  <svg width={55} height={11} {...props}>
    <path d="M0 4h42v4H0V4zM51 9V8h-7v1h7z" />
    <path d="M52.5 6a2.5 2.5 0 110 5 2.5 2.5 0 110-5zM51 3V2h-7v1h7z" />
    <path d="M52.5 0a2.5 2.5 0 110 5 2.5 2.5 0 110-5z" />
  </svg>
);

export default SvgComponent;
