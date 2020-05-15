import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h2v22H0V0zM6 0h2v22H6V0z" />
    <path d="M2 0v22h4V0H2z" fill="#fff" />
    <path d="M2 0v7h4V0H2z" />
  </svg>
);

export default SvgComponent;
