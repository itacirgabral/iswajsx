import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 15v15h8V15h-8z" />
    <path fill="#fff" d="M16 16h6v13h-6z" />
    <path d="M21 0h2v13h-2zM0 15h13v4H0zM7 19l6 6v-2.813L9.812 19H7z" />
  </svg>
);

export default SvgComponent;
