import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v7h1V1h6V0H0z" />
    <path d="M3.719 3L3 3.719l3 2.969c6.053 6.053 6.053 15.884 0 21.937a15.443 15.443 0 01-6 3.719v1.031a16.447 16.447 0 006.688-4.063C13.13 22.87 13.13 12.445 6.688 6l-2.97-3z" />
    <path d="M9 7a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4zM10 19a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4zM4 28a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4z" />
    <path
      d="M9 8a2 2 0 100 4 2 2 0 000-4zM10 20a2 2 0 100 4 2 2 0 000-4zM4 29a2 2 0 100 4 2 2 0 000-4z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;