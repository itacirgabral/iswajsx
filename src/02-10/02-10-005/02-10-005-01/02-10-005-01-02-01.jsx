import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={22} {...props}>
    <path d="M7 0L1.5 5.5 7 11V0zM6 2.438v6.124L2.937 5.5 6 2.437z" />
    <path d="M6 10a6 6 0 100 12 6 6 0 000-12zm0 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
    <path d="M10.5 16a4.5 4.5 0 11-9 0 4.5 4.5 0 119 0z" fill="#fff" />
    <path d="M7 3.75v1h1a8 8 0 018 8V16h1v-3.25a9 9 0 00-9-9H7z" />
    <path
      d="M7 4.75v1.5h1v.031a6.976 6.976 0 016.469 6.469h.031V16H16v-3.25a8 8 0 00-8-8H7z"
      fill="#fff"
    />
    <path d="M7 6.25v1h.5a6 6 0 016 6V16h1v-2.75a7 7 0 00-7-7H7z" />
    <path d="M6 2.438L2.937 5.5 6 8.563V2.436z" fill="#fff" />
  </svg>
);

export default SvgComponent;
