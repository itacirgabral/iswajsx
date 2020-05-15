import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 0v30H0V15h13V0h2z" />
    <path d="M2 17h11v11H2V17z" fill="#fff" />
    <path d="M18 5v2a3 3 0 010 6v2h-1V5h1zm0 3v4a2 2 0 100-4z" />
    <path d="M18 8a2 2 0 010 4V8z" fill="#fff" />
  </svg>
);

export default SvgComponent;