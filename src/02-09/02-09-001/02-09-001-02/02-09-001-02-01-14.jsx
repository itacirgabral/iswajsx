import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 8H0l8-8 8 8zM9 8v6a4 4 0 004 4h13v4H14a7 7 0 01-7-7V8h2z" />
  </svg>
);

export default SvgComponent;