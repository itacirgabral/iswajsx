import React from "react";

const SvgComponent = (props) => (
  <svg width={61} height={11} {...props}>
    <path d="M0 5h42v4H0V5zM52 7h1V0h-1v7z" />
    <path d="M55 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0zM58 7h1V0h-1v7z" />
    <path d="M61 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0zM46 7h1V0h-1v7z" />
    <path d="M49 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0z" />
  </svg>
);

export default SvgComponent;
