import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 3v30h15V18H2V3H0z" />
    <path d="M13 20H2v11h11V20z" fill="#fff" />
    <path d="M5 0v2a3 3 0 010 6v2H4V0h1zm0 3v4a2 2 0 000-4z" />
    <path d="M5 3a2 2 0 010 4V3z" fill="#fff" />
  </svg>
);

export default SvgComponent;
