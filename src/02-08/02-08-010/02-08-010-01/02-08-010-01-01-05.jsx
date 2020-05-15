import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 22l7-7 7 7H0z" />
    <path d="M16 0v8.625a3.5 3.5 0 100 5.75V23a3 3 0 01-3 3c-1.657 0-3-1.79-3-4H4a6 6 0 006 6h3a5 5 0 005-5V0h-2zm-2 9.5a2 2 0 110 4 2 2 0 010-4z" />
  </svg>
);

export default SvgComponent;