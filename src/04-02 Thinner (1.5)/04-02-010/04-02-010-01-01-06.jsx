import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 12h1v4h4v1H9v-5z" />
    <path d="M10.5 8a3.5 3.5 0 013.5 3.5 6.708 6.708 0 01-1 3.5h-2v-2c1.105 0 2-.672 2-1.5A2.5 2.5 0 0010.5 9H7V8h3.5zM23 12h1v4h4v1h-5v-5z" />
    <path d="M24.5 8a3.5 3.5 0 013.5 3.5 6.708 6.708 0 01-1 3.5h-2v-2c1.105 0 2-.672 2-1.5A2.5 2.5 0 0024.5 9H21V8h3.5z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
  </svg>
);

export default SvgComponent;