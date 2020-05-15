import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 7v2h25V7H0zM9.5 10.5L5 15h9l-4.5-4.5zM25 1v14l7-7-7-7z" />
    <path d="M16 0v15a2 2 0 01-4 0H7c0 2.21 2.239 4 5 4s5-1.79 5-4V0h-1z" />
  </svg>
);

export default SvgComponent;
