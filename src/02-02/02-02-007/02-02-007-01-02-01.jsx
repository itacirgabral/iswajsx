import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3 5a3 3 0 100 6 3 3 0 000-6zM10 0a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4zM17 5a3 3 0 100 6 3 3 0 000-6zM24 0a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4zM31 5a3 3 0 100 6 3 3 0 000-6z" />
    <path
      d="M10 1a2 2 0 100 4 2 2 0 000-4zM24 1a2 2 0 100 4 2 2 0 000-4z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
