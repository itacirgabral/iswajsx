import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={30} {...props}>
    <path d="M15 15v15h8V15h-8z" />
    <path fill="#fff" d="M16 16h3v13h-3z" />
    <path d="M10 8L8.594 9.406 12.188 13H15l-5-5zM0 15h13v3H0zM21 0h2v13h-2zM6 18l7 7v-2.813L8.812 18H6z" />
  </svg>
);

export default SvgComponent;
