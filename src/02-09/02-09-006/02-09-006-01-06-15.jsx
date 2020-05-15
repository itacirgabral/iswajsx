import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 7L7 6V1H2L1 0h7v7z" />
    <path d="M0 11.5a9.956 9.956 0 012.938-7.063l1.187-1.312.75.75-1.25 1.25A8.988 8.988 0 001 11.5c0 2.485.996 4.746 2.625 6.375L8 22.281 7.281 23l-4.343-4.438A9.956 9.956 0 010 11.5zM17 7l-1-1V1h-5l-1-1h7v7z" />
    <path d="M9 11.5a9.956 9.956 0 012.938-7.063l1.187-1.312.75.75-1.25 1.25A8.988 8.988 0 0010 11.5c0 2.485.996 4.746 2.625 6.375L17 22.281l-.719.719-4.343-4.438A9.956 9.956 0 019 11.5z" />
  </svg>
);

export default SvgComponent;
