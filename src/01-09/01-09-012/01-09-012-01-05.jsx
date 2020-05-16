import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={30} {...props}>
    <path d="M10 15h8v15h-8z" />
    <path fill="#fff" d="M11 16h3v13h-3z" />
    <path d="M5 15c-4 0-4 4-4 4v4h2v-4c0-2 2-2 2-2h3v-2H5zM11 0h1v13h-1zM14 2h1v11h-1zM17 4h1v9h-1z" />
    <path d="M3.094 11.031L.5 12.531l7.5 13v-6l-4.906-8.5z" />
  </svg>
);

export default SvgComponent;
