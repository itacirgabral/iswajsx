import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={28} {...props}>
    <path d="M17.5 4.5L13 0v9l4.5-4.5zM0 14C0 8.477 4.477 4 10 4h3v1h-3a9 9 0 00-9 9v6H0v-6zM6.5 27.5L2 23h9l-4.5 4.5z" />
    <path d="M6 20c0-5.523 4.477-10 10-10h4v1h-4a9 9 0 00-9 9v3H6v-3z" />
  </svg>
);

export default SvgComponent;
