import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 3v30H0V18h13V3h2z" />
    <path d="M2 20h11v11H2V20z" fill="#fff" />
    <path d="M10 0v2a3 3 0 000 6v2h1V0h-1zm0 3v4a2 2 0 010-4z" />
    <path d="M10 3a2 2 0 000 4V3z" fill="#fff" />
  </svg>
);

export default SvgComponent;
