import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M61 5H19v4h42V5zM9 7H8V0h1v7z" />
    <path d="M6 8.5a2.5 2.5 0 115 0 2.5 2.5 0 11-5 0zM3 7H2V0h1v7z" />
    <path d="M0 8.5a2.5 2.5 0 115 0 2.5 2.5 0 11-5 0zM15 7h-1V0h1v7z" />
    <path d="M12 8.5a2.5 2.5 0 115 0 2.5 2.5 0 11-5 0z" />
  </svg>
);

export default SvgComponent;
