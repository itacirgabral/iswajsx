import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M27 7l-5-5-5 5h10zm-2.438-1h-5.125L22 3.437 24.563 6zM24 12a9 9 0 01-9 9H9v-1h6a8 8 0 008-8V7h1v5z" />
    <path d="M23 12a8 8 0 01-8 8H9v-2h6a6 6 0 006-6V7h2v5z" fill="#fff" />
    <path d="M21 12a6 6 0 01-6 6H9v-1h6a5 5 0 005-5V7h1v5zM5 18V8l-5 5 5 5zm-1-2.438L1.437 13 4 10.437v5.126z" />
    <path d="M8 15a9 9 0 009-9V0h-1v6a8 8 0 01-8 8H5v1h3z" />
    <path d="M8 14a8 8 0 008-8V0h-2v6a6 6 0 01-6 6H5v2h3z" fill="#fff" />
    <path d="M8 12a6 6 0 006-6V0h-1v6a5 5 0 01-5 5H5v1h3z" />
    <path
      d="M24.563 6L22 3.437 19.437 6h5.125zM4 15.563v-5.126L1.437 13 4 15.563z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
