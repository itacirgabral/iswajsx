import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={20} {...props}>
    <path d="M17.5 15.5L13 20v-9l4.5 4.5zM0 6c0 5.523 4.477 10 10 10h3v-1h-3a9 9 0 01-9-9V0H0v6z" />
  </svg>
);

export default SvgComponent;
