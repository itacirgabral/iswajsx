import React from "react";

const SvgComponent = (props) => (
  <svg width={38} height={21} {...props}>
    <path d="M15 7l7 7-7 7v-2l5-5-5-5V7z" />
    <path d="M8 0a8 8 0 000 16h7v-4H8c-3.314 0-6-1.79-6-4a6 6 0 016-6h20a8 8 0 018 8v4h2v-4c0-5.523-4.477-10-10-10H8z" />
  </svg>
);

export default SvgComponent;
