import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 5L4.5.5 9 5H0zm2.438-1h4.124L4.5 1.906 2.437 4zM14 18C8.477 18 4 13.523 4 8V5h1v3a9 9 0 009 9h6v1h-6z" />
    <path d="M2.438 4L4.5 1.906 6.563 4H2.438z" fill="#fff" />
  </svg>
);

export default SvgComponent;