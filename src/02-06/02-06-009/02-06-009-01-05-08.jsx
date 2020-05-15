import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 10V0L5 5l5 5zM9 7.562L6.437 5 9 2.437v5.125zM15 3a9 9 0 019 9v6h-1v-6a8 8 0 00-8-8h-5V3h5z" />
    <path d="M15 4a8 8 0 018 8v6h-2v-6a6 6 0 00-6-6h-5V4h5z" fill="#fff" />
    <path d="M15 6a6 6 0 016 6v6h-1v-6a5 5 0 00-5-5h-5V6h5zM5 18V8l-5 5 5 5zm-1-2.438L1.437 13 4 10.437v5.125z" />
    <path d="M10 11a9 9 0 019 9v6h-1v-6a8 8 0 00-8-8H5v-1h5z" />
    <path d="M10 12a8 8 0 018 8v6h-2v-6a6 6 0 00-6-6H5v-2h5z" fill="#fff" />
    <path d="M10 14a6 6 0 016 6v6h-1v-6a5 5 0 00-5-5H5v-1h5z" />
    <path
      d="M9 7.562V2.437L6.437 5 9 7.562zM4 15.562v-5.125L1.437 13 4 15.562z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
