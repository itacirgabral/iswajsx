import React from "react";

const SvgComponent = (props) => (
  <svg width={40} height={15} {...props}>
    <path d="M7 0L0 7h14L7 0zM6 7h2v7H6V7zM20 15l-7-7h14l-7 7zM19 8h2V1h-2v7zM33 0l-7 7h14l-7-7zM32 7h2v7h-2V7z" />
  </svg>
);

export default SvgComponent;
