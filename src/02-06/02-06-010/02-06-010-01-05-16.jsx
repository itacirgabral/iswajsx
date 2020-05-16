import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={27} {...props}>
    <path d="M14 10V0l5 5-5 5zm1-2.438L17.563 5 15 2.437v5.126zM9 3a9 9 0 00-9 9v6h1v-6a8 8 0 018-8h5V3H9z" />
    <path d="M9 4a8 8 0 00-8 8v6h2v-6a6 6 0 016-6h5V4H9z" fill="#fff" />
    <path d="M9 6a6 6 0 00-6 6v6h1v-6a5 5 0 015-5h5V6H9zM8 27l-5-5h10l-5 5zm0-1.406L10.563 23H5.436L8 25.594z" />
    <path d="M6 22v-3a9 9 0 019-9h6v1h-6a8 8 0 00-8 8v3H6z" />
    <path d="M7 22v-3a8 8 0 018-8h6v2h-6a6 6 0 00-6 6v3H7z" fill="#fff" />
    <path d="M9 22v-3a6 6 0 016-6h6v1h-6a5 5 0 00-5 5v3H9z" />
    <path
      d="M15 7.563V2.438L17.563 5 15 7.563zM8 25.594L5.437 23h5.125L8 25.594z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
