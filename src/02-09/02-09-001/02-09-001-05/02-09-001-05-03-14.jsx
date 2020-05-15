import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M31 7l-7 7 7 7v-2l-5-5 5-5V7z" />
    <path d="M37 0a8 8 0 010 16h-6v-4h6c3.314 0 6-1.79 6-4a6 6 0 00-6-6H8a6 6 0 00-6 6c0 2.21 2.686 4 6 4h7v4H8A8 8 0 118 0h29z" />
  </svg>
);

export default SvgComponent;
