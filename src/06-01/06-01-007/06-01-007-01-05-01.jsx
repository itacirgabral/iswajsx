import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 3v30h15V18H6V3H4z" />
    <path d="M17 20H6v11h11V20z" fill="#fff" />
    <path d="M4.5 0a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 1.5a3 3 0 110 6 3 3 0 010-6z" />
    <path d="M4.5 1.5a3 3 0 100 6 3 3 0 000-6z" fill="#fff" />
  </svg>
);

export default SvgComponent;
