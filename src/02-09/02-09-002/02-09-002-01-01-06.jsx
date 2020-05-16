import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={32} {...props}>
    <path d="M18 13V0l-6.5 6.5L18 13z" />
    <path d="M18 6v1c2.21 0 4 2.239 4 5a4 4 0 01-4 4h-7v9a3 3 0 01-3 3H0v4h6a7 7 0 007-7v-5h3a8 8 0 008-8 6 6 0 00-6-6z" />
  </svg>
);

export default SvgComponent;
