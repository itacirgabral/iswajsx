import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 7v15h8V7h-8z" />
    <path fill="#fff" d="M16 8h3v13h-3z" />
    <path d="M10 0L8.594 1.406 12.188 5H15l-5-5zM0 7h13v4H0zM27.938 11.219L24 15.188V18l5.375-5.375-1.438-1.406z" />
  </svg>
);

export default SvgComponent;