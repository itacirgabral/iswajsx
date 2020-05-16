import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={21} {...props}>
    <path d="M8 0a8 8 0 00-8 8v4a9 9 0 009 9h17v-4H8a6 6 0 01-6-6V8a6 6 0 016-6h21V0H8z" />
  </svg>
);

export default SvgComponent;
