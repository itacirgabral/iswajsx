import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 0L0 7h14L7 0zM6 7h2v7H6V7z" />
    <path d="M20 0l-7 7h14l-7-7zM19 7h2v7h-2V7z" />
    <path d="M33 0l-7 7h14l-7-7zM32 7h2v7h-2V7zM0 16v2h40v-2H0z" />
  </svg>
);

export default SvgComponent;
