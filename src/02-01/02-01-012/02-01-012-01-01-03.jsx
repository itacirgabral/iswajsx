import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 3a6 6 0 100 12A6 6 0 008 3zm0 2a4 4 0 110 8 4 4 0 010-8z" />
    <path
      d="M8 5a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"
      fill="#fff"
    />
    <path d="M8 7a2 2 0 100 4 2 2 0 000-4zM16 0H0v2h16V0zM16 16H0v2h16v-2z" />
  </svg>
);

export default SvgComponent;