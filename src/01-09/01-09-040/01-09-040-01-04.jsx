import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 0h13v15H16z" />
    <path fill="#fff" d="M18 2h9v11h-9z" />
    <path d="M0 0v2h14V0H0zM6.406 2L14 9.563V6.75L9.25 2H6.406z" />
  </svg>
);

export default SvgComponent;