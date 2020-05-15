import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M20 22v3.25H10v1.5h10V30h1v-3.25h2V30h1v-3.25h1v-1.5h-1V22h-1v3.25h-2V22h-1z" />
  </svg>
);

export default SvgComponent;