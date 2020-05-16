import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={14} {...props}>
    <path d="M0 0v14h16v-2H2V0H0z" />
    <path d="M5 0v9h11V7H7V0H5z" />
    <path d="M2 0v12h14V9H5V0H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
