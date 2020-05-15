import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 17v10l5-5-5-5zm1 2.438L17.563 22 15 24.563v-5.125zM9 24a9 9 0 01-9-9V9h1v6a8 8 0 008 8h5v1H9z" />
    <path d="M9 23a8 8 0 01-8-8V9h2v6a6 6 0 006 6h5v2H9z" fill="#fff" />
    <path d="M9 21a6 6 0 01-6-6V9h1v6a5 5 0 005 5h5v1H9zM8 0L3 5h10L8 0zm0 1.406L10.563 4H5.436L8 1.406z" />
    <path d="M6 5v3a9 9 0 009 9h6v-1h-6a8 8 0 01-8-8V5H6z" />
    <path d="M7 5v3a8 8 0 008 8h6v-2h-6a6 6 0 01-6-6V5H7z" fill="#fff" />
    <path d="M9 5v3a6 6 0 006 6h6v-1h-6a5 5 0 01-5-5V5H9z" />
    <path
      d="M15 19.438v5.125L17.563 22 15 19.437zM8 1.406L5.437 4h5.125L8 1.406z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;