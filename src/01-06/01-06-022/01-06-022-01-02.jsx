import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 7v15h8V7h-8z" />
    <path fill="#fff" d="M16 8h3v13h-3z" />
    <path d="M10 0L8.594 1.406 14.188 7H17l-7-7zM0 7h15v4H0zM27.938 11.219L23 16.188V19l6.375-6.375-1.438-1.406z" />
  </svg>
);

export default SvgComponent;
