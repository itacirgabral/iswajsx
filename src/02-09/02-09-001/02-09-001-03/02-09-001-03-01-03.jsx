import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={23} {...props}>
    <path d="M21 23l8-8-8-8v16z" />
    <path d="M7 0a7 7 0 00-7 7v2a8 8 0 008 8h13v-4H7a5 5 0 01-5-5V7a5 5 0 015-5h17V0H7z" />
  </svg>
);

export default SvgComponent;
