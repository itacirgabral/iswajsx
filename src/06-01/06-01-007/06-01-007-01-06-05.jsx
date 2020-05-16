import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={27} {...props}>
    <path d="M6 0l6 6v21H0V6l6-6z" />
    <path d="M6 2.813l4 4V10h2v8h-2v7H2v-7H0v-8h2V6.812l4-4z" fill="#fff" />
    <path d="M5.5 9a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
    <path d="M5.5 10.5a3 3 0 110 6 3 3 0 010-6z" fill="#fff" />
  </svg>
);

export default SvgComponent;
