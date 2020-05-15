import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 14l5 5 5-5H0zm2.438 1h5.124L5 17.563 2.437 15zM3 9a9 9 0 019-9h6v1h-6a8 8 0 00-8 8v5H3V9z" />
    <path d="M4 9a8 8 0 018-8h6v2h-6a6 6 0 00-6 6v5H4V9z" fill="#fff" />
    <path d="M6 9a6 6 0 016-6h6v1h-6a5 5 0 00-5 5v5H6V9zM8 19l5 5 5-5H8zm2.438 1h5.124L13 22.563 10.437 20z" />
    <path d="M11 14a9 9 0 019-9h6v1h-6a8 8 0 00-8 8v5h-1v-5z" />
    <path d="M12 14a8 8 0 018-8h6v2h-6a6 6 0 00-6 6v5h-2v-5z" fill="#fff" />
    <path d="M14 14a6 6 0 016-6h6v1h-6a5 5 0 00-5 5v5h-1v-5z" />
    <path
      d="M2.438 15L5 17.563 7.563 15H2.438zM10.438 20L13 22.563 15.563 20h-5.126z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;