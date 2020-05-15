import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 15h8v15H9z" />
    <path fill="#fff" d="M10 16h6v13h-6z" />
    <path d="M3 15c-3 0-3 3-3 3v5h2v-3c0-1 1-1 1-1h4v-4H3zM13 0h1v13h-1zM10 2h1v11h-1zM7 4h1v9H7z" />
    <path d="M1.375 11.781l-.875.5L7 23.531v-2l-5.625-9.75z" />
  </svg>
);

export default SvgComponent;