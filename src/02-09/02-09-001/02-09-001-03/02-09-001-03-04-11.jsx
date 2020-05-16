import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={17} {...props}>
    <path d="M17 0a7 7 0 017 7v2a8 8 0 01-8 8H3v-4h14a5 5 0 005-5V7a5 5 0 00-5-5H0V0h17z" />
  </svg>
);

export default SvgComponent;
