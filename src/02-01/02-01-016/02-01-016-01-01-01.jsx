import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4h15v1H0zM7 0a4 4 0 00-4 4h1a3 3 0 013-3h1a3 3 0 013 3h1a4 4 0 00-4-4H7z" />
    <path d="M7 1a3 3 0 00-3 3h7a3 3 0 00-3-3H7z" fill="#fff" />
  </svg>
);

export default SvgComponent;
