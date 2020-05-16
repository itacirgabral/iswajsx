import React from "react";

const SvgComponent = (props) => (
  <svg width={44} height={19} {...props}>
    <path d="M0 12h14l-7 7-7-7z" />
    <path d="M16 0C10.477 0 6 4.477 6 10v2h2v-2a8 8 0 018-8h20a6 6 0 016 6c0 2.21-2.686 4-6 4h-7v4h7a8 8 0 100-16H16z" />
  </svg>
);

export default SvgComponent;
