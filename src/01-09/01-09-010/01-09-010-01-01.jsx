import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 15h8v15H6z" />
    <path fill="#fff" d="M7 16h6v13H7z" />
    <path d="M0 15v6h2v-4h4v-2H0zM10 0h1v15h-1zM7 2h1v13H7zM4 4h1v11H4zM0 26v4h6v-2H2v-2H0z" />
  </svg>
);

export default SvgComponent;
