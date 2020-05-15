import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 15h8v15h-8z" />
    <path fill="#fff" d="M16 16h6v13h-6z" />
    <path d="M0 15h15v2H0zM18 0h2v15h-2zM13 3l-1.813.875L16.625 15H18v-1.719L13 3z" />
    <path d="M10 9l-1.438 1.406L13.189 15H16l-6-6zM3.938 22.969l-.532 1.937L15 28v-2.094L3.937 22.97z" />
  </svg>
);

export default SvgComponent;
