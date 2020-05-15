import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1 0h2v15H1V0zM6 0h2v15H6V0z" />
    <path d="M3 0v15h3V0H3z" fill="#fff" />
    <path d="M4.5 3a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);

export default SvgComponent;
