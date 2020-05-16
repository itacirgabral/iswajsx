import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={51} {...props}>
    <path d="M7 14V0L0 7l7 7z" />
    <path d="M7 6v2h7.5a4.5 4.5 0 010 9H11C5.477 17 1 21.477 1 27s4.477 10 10 10h3a5 5 0 110 10H3v4h9a9 9 0 100-18H9a6 6 0 010-12h4.5a7.5 7.5 0 100-15H7z" />
  </svg>
);

export default SvgComponent;
