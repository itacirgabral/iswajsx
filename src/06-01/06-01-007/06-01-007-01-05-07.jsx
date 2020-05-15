import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 3v30H0V18h13V3h2z" />
    <path d="M2 20h11v11H2V20z" fill="#fff" />
    <path d="M14.5 0a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
  </svg>
);

export default SvgComponent;
