import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 7v15h8V7H9z" />
    <path fill="#fff" d="M10 8h3v13h-3z" />
    <path d="M2.5.5L1.094 1.938 7 7.813V5L2.5.5zM0 20v2h7v-2H0z" />
  </svg>
);

export default SvgComponent;
