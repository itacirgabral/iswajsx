import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 7l1-1V1h5l1-1H0v7z" />
    <path d="M8 11.5a9.956 9.956 0 00-2.938-7.063L3.875 3.125l-.75.75 1.25 1.25A8.988 8.988 0 017 11.5a8.988 8.988 0 01-2.625 6.375L0 22.281.719 23l4.343-4.438A9.956 9.956 0 008 11.5z" />
  </svg>
);

export default SvgComponent;