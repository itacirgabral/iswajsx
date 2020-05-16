import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={28} {...props}>
    <path d="M6 0l6 6v21H0V6l6-6z" />
    <path d="M6 2.813l-4 4V21H0v7h12v-7h-2V6.812l-4-4z" fill="#fff" />
    <path d="M5.5 19a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
  </svg>
);

export default SvgComponent;
