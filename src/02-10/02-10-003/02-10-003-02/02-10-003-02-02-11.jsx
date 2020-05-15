import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M19.5 9.5L14 4v11l5.5-5.5zm-1.438 0L15 12.563V6.436L18.063 9.5z" />
    <path d="M32 5c0-2.761-5.373-5-12-5h-9C4.925 0 0 2.015 0 4.5v2C0 9.538 5.82 12 13 12V6.937C6.718 6.691 2 5.697 2 4.5 2 3.12 8.268 2 16 2s14 1.12 14 2.5c0 1.097-3.995 2.007-9.5 2.344V12C26.892 11.845 32 8.767 32 5z" />
    <path d="M18.063 9.5L15 6.437v6.125L18.063 9.5z" fill="#fff" />
  </svg>
);

export default SvgComponent;