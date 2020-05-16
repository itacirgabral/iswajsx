import React from "react";

const SvgComponent = (props) => (
  <svg width={43} height={21} {...props}>
    <path d="M29 7v14l-7-7 7-7z" />
    <path d="M35 0a8 8 0 010 16h-6v-4h6c3.314 0 6-1.79 6-4a6 6 0 00-6-6H0V0h35z" />
  </svg>
);

export default SvgComponent;
