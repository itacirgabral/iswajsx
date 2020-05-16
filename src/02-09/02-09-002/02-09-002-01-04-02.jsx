import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={20} {...props}>
    <path d="M16 0a6 6 0 00-6 6v5H6a6 6 0 00-6 6v3h2v-3a4 4 0 014-4h6V6a4 4 0 014-4h5V0h-5z" />
  </svg>
);

export default SvgComponent;
