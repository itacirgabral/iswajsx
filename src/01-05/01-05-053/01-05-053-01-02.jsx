import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 0v15h8V0h-8z" />
    <path fill="#fff" d="M16 1h3v13h-3z" />
    <path d="M0 0h15v4H0zM27.938 4.219L23 9.187V12l6.375-6.375-1.438-1.406z" />
  </svg>
);

export default SvgComponent;
