import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={18} {...props}>
    <path d="M8 0L1 7h14L8 0zM7 7h2v7H7V7zM0 16v2h16v-2H0z" />
  </svg>
);

export default SvgComponent;
