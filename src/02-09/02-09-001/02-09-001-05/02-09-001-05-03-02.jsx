import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 7l7 7-7 7v-2l5-5-5-5V7z" />
    <path d="M8 0a8 8 0 000 16h6v-4H8c-3.314 0-6-1.79-6-4a6 6 0 016-6h35V0H8z" />
  </svg>
);

export default SvgComponent;
