import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 7l-8 8 8 8v-2l-6-6 6-6V7z" />
    <path d="M22 0a7 7 0 017 7v2a8 8 0 01-8 8H8v-4h14a5 5 0 005-5V7a5 5 0 00-5-5H5V0h17z" />
  </svg>
);

export default SvgComponent;
