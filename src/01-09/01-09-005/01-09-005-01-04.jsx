import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 15h8v15h-8z" />
    <path fill="#fff" d="M16 16h6v13h-6z" />
    <path d="M0 15h13v2H0zM18 0h2v13h-2zM13 3l-1.813.875L15.657 13h2.218L13 3zM10 9l-1.438 1.406L11.188 13H14l-4-4zM3.938 22.969l-.532 1.937L13 27.47v-2.094l-9.063-2.406z" />
  </svg>
);

export default SvgComponent;
