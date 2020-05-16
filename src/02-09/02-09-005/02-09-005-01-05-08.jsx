import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={20} {...props}>
    <path d="M5 0L.5 4.5 5 9V0zM4 2.438v4.124L1.906 4.5 4 2.437zM18 14C18 8.477 13.523 4 8 4H5v1h3a9 9 0 019 9v6h1v-6z" />
    <path d="M4 2.438L1.906 4.5 4 6.563V2.438z" fill="#fff" />
  </svg>
);

export default SvgComponent;
