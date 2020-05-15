import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 14l5 5 5-5H8.5L5 17.5 1.5 14H0zM3 9a9 9 0 019-9h6v1h-6a8 8 0 00-8 8v5H3V9z" />
    <path d="M4 9a8 8 0 018-8h6v2h-6a6 6 0 00-6 6v5H4V9z" fill="#fff" />
    <path d="M6 9a6 6 0 016-6h6v1h-6a5 5 0 00-5 5v5H6V9zM8 19l5 5 5-5h-1.5L13 22.5 9.5 19H8z" />
    <path d="M11 14a9 9 0 019-9h6v1h-6a8 8 0 00-8 8v5h-1v-5z" />
    <path d="M12 14a8 8 0 018-8h6v2h-6a6 6 0 00-6 6v5h-2v-5z" fill="#fff" />
    <path d="M14 14a6 6 0 016-6h6v1h-6a5 5 0 00-5 5v5h-1v-5z" />
  </svg>
);

export default SvgComponent;
