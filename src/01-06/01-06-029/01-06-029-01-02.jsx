import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 15v15h8V15h-8z" />
    <path fill="#fff" d="M16 16h3v13h-3z" />
    <path d="M10 8L8.594 9.406 14.188 15H17l-7-7zM0 15h15v3H0zM21 0h2v15h-2zM2 28h13v2H2z" />
  </svg>
);

export default SvgComponent;
