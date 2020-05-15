import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 5h42v4H0V5zM53 7v1h-7V7h7z" />
    <path d="M54.5 10a2.5 2.5 0 110-5 2.5 2.5 0 110 5zM50 12v1h7v-1h-7z" />
    <path d="M48.5 15a2.5 2.5 0 110-5 2.5 2.5 0 110 5zM50 2v1h7V2h-7z" />
    <path d="M48.5 5a2.5 2.5 0 110-5 2.5 2.5 0 110 5z" />
  </svg>
);

export default SvgComponent;
