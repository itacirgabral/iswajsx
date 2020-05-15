import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 15h8v15h-8z" />
    <path fill="#fff" d="M11 16h6v13h-6z" />
    <path d="M4 15c-4 0-4 4-4 4v4h2v-4c0-2 2-2 2-2h6v-2H4zM14 0h1v15h-1zM11 2h1v13h-1zM8 4h1v11H8z" />
    <path d="M3.094 11.031L.5 12.531 10 29v-6L3.094 11.031z" />
  </svg>
);

export default SvgComponent;