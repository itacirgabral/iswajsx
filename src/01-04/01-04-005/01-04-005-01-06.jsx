import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={22} {...props}>
    <path d="M0 0v22h14V0L7 7 0 0z" />
    <path d="M0 10v2h14v-2H0zM0 14h9v3H0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
