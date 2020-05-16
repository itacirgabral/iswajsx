import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={21} {...props}>
    <path d="M21 0a8 8 0 018 8v4a9 9 0 01-9 9H3v-4h18a6 6 0 006-6V8a6 6 0 00-6-6H0V0h21z" />
  </svg>
);

export default SvgComponent;
