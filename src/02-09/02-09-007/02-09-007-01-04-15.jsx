import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0H1l7 7V0z" />
    <path d="M0 11.5a9.956 9.956 0 012.938-7.063l1.187-1.312.75.75-1.25 1.25A8.988 8.988 0 001 11.5c0 2.485.996 4.746 2.625 6.375L8 22.281 7.281 23l-4.343-4.438A9.956 9.956 0 010 11.5zM16 23H9l7-7v7z" />
    <path d="M8 11.5a9.956 9.956 0 002.938 7.063l1.187 1.312.75-.75-1.25-1.25A8.988 8.988 0 019 11.5c0-2.485.996-4.746 2.625-6.375L16 .719 15.281 0l-4.344 4.438A9.956 9.956 0 008 11.5z" />
  </svg>
);

export default SvgComponent;