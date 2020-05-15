import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v2h9a4 4 0 014 4v2a3 3 0 01-3 3H9v4a6 6 0 006-6V6a6 6 0 00-6-6H0z" />
  </svg>
);

export default SvgComponent;
