import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 3v30h15V18H8V3H6z" />
    <path d="M19 20H8v11h11V20z" fill="#fff" />
    <path d="M3 0v2a3 3 0 000 6v2h1V0H3zm0 3v4a2 2 0 110-4z" />
    <path d="M3 3a2 2 0 100 4V3z" fill="#fff" />
  </svg>
);

export default SvgComponent;
