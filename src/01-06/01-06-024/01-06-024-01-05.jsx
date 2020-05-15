import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 15v15h8V15h-8z" />
    <path fill="#fff" d="M16 16h3v13h-3z" />
    <path d="M10 8L8.594 9.406 12.188 13H15l-5-5zM0 15h13v3H0zM21 0h2v13h-2zM27.938 19.219L24 23.187V26l5.375-5.375-1.438-1.406z" />
  </svg>
);

export default SvgComponent;
