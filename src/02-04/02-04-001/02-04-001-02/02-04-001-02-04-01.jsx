import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 0h2v22H4V0zM10 0h2v22h-2V0z" />
    <path d="M6 0v22h4V0H6z" fill="#fff" />
    <path d="M0 9v3h16V9H0z" />
  </svg>
);

export default SvgComponent;