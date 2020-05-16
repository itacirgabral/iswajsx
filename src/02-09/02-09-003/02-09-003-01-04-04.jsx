import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={25} {...props}>
    <path d="M6 0a6 6 0 00-6 6 8 8 0 008 8h3v4a7 7 0 007 7h7v-4h-9a3 3 0 01-3-3v-4a5 5 0 005-5 3 3 0 00-3-3 4 4 0 00-4 4v.563L6 10c-1.874-.208-4-1.79-4-4 0-2.761 1.79-5 4-5V0zm9 7a2 2 0 010 4l-2-.219V9a2 2 0 012-2z" />
  </svg>
);

export default SvgComponent;
