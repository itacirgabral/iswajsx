import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 0h15v15H14z" />
    <path fill="#fff" d="M16 2h11v11H16z" />
    <path d="M0 0v2h14V0H0zM6.406 2L14 9.563V6.75L9.25 2H6.406z" />
  </svg>
);

export default SvgComponent;
