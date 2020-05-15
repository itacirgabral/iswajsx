import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M27 14l-5 5-5-5h10zm-2.438 1h-5.125L22 17.563 24.563 15zM24 9a9 9 0 00-9-9H9v1h6a8 8 0 018 8v5h1V9z" />
    <path d="M23 9a8 8 0 00-8-8H9v2h6a6 6 0 016 6v5h2V9z" fill="#fff" />
    <path d="M21 9a6 6 0 00-6-6H9v1h6a5 5 0 015 5v5h1V9zM5 3v10L0 8l5-5zM4 5.438L1.437 8 4 10.563V5.436z" />
    <path d="M8 6a9 9 0 019 9v6h-1v-6a8 8 0 00-8-8H5V6h3z" />
    <path d="M8 7a8 8 0 018 8v6h-2v-6a6 6 0 00-6-6H5V7h3z" fill="#fff" />
    <path d="M8 9a6 6 0 016 6v6h-1v-6a5 5 0 00-5-5H5V9h3z" />
    <path
      d="M24.563 15L22 17.563 19.437 15h5.125zM4 5.438v5.125L1.437 8 4 5.437z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
