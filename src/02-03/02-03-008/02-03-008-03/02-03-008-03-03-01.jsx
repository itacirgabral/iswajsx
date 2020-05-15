import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h2.719l5.219-5.25L13.188 8H16L8 0zM4 8v26h23v-2H6V8H4z" />
    <path d="M10 8v20h17v-2H12V8h-2z" />
    <path d="M6 8v24h21v-4H10V8H6z" fill="#fff" />
  </svg>
);

export default SvgComponent;
