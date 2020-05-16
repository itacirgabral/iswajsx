import React from "react";

const SvgComponent = (props) => (
  <svg width={55} height={11} {...props}>
    <path d="M0 4h42v4H0V4zM48 9V8h7v1h-7z" />
    <path d="M46.5 6a2.5 2.5 0 110 5 2.5 2.5 0 110-5zM48 3V2h7v1h-7z" />
    <path d="M46.5 0a2.5 2.5 0 110 5 2.5 2.5 0 110-5z" />
  </svg>
);

export default SvgComponent;
