import React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={15} {...props}>
    <path d="M7 15L0 8h14l-7 7zM6 8h2V1H6v7zM20 0l-7 7h14l-7-7zM19 7h2v7h-2V7z" />
  </svg>
);

export default SvgComponent;
