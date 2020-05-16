import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={30} {...props}>
    <path d="M10 15h8v15h-8z" />
    <path fill="#fff" d="M11 16h6v13h-6z" />
    <path d="M4 15c-4 0-4 4-4 4v4h2v-4c0-2 2-2 2-2h4v-2H4zM14 0h1v13h-1zM11 2h1v11h-1zM8 4h1v9H8z" />
    <path d="M3.094 11.031L.5 12.531l7.5 13v-6l-4.906-8.5z" />
  </svg>
);

export default SvgComponent;
