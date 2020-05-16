import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M15 0v30H0V15h13V0h2z" />
    <path d="M2 17h11v11H2V17z" fill="#fff" />
    <path d="M10 4v2a3 3 0 000 6v2h1V4h-1zm0 3v4a2 2 0 110-4z" />
    <path d="M10 7a2 2 0 000 4V7z" fill="#fff" />
  </svg>
);

export default SvgComponent;
