import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={40} {...props}>
    <path d="M13 0L5 8h16l-8-8zM12 8v20.188l-12-12V40h2V21l12 12V8h-2z" />
  </svg>
);

export default SvgComponent;
