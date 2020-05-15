import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14.5 4.5L21 11h-2l-4.5-4.5L10 11H8l6.5-6.5z" />
    <path d="M1 0v12c0 2.761 2.686 5 6 5 2.21 0 4-2.686 4-6h7a9 9 0 01-9 9H7c-3.866 0-7-3.582-7-8V0h1z" />
  </svg>
);

export default SvgComponent;