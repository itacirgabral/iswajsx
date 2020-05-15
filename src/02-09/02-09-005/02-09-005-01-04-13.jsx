import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v7l7-7H0z" />
    <path d="M11.5 8a9.956 9.956 0 01-7.063-2.938L3.125 3.875l.75-.75 1.25 1.25A8.988 8.988 0 0011.5 7a8.988 8.988 0 006.375-2.625L22.281 0 23 .719l-4.438 4.343A9.956 9.956 0 0111.5 8z" />
  </svg>
);

export default SvgComponent;
