import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 16v10l-5-5 5-5zm-1 2.438L6.437 21 9 23.563v-5.125zM15 23a9 9 0 009-9V8h-1v6a8 8 0 01-8 8h-5v1h5z" />
    <path d="M15 22a8 8 0 008-8V8h-2v6a6 6 0 01-6 6h-5v2h5z" fill="#fff" />
    <path d="M15 20a6 6 0 006-6V8h-1v6a5 5 0 01-5 5h-5v1h5zM5 8v10l-5-5 5-5zm-1 2.438L1.437 13 4 15.563v-5.126z" />
    <path d="M10 15a9 9 0 009-9V0h-1v6a8 8 0 01-8 8H5v1h5z" />
    <path d="M10 14a8 8 0 008-8V0h-2v6a6 6 0 01-6 6H5v2h5z" fill="#fff" />
    <path d="M10 12a6 6 0 006-6V0h-1v6a5 5 0 01-5 5H5v1h5z" />
    <path
      d="M9 18.438v5.125L6.437 21 9 18.437zM4 10.438v5.124L1.437 13 4 10.437z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;