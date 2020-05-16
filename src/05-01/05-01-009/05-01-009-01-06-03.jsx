import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={6} {...props}>
    <path d="M.5 3a3 3 0 106 0 3 3 0 00-6 0z" />
    <path d="M5.5 3.75v-1.5h7v1.5h-7z" />
  </svg>
);

export default SvgComponent;
