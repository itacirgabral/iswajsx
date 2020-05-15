import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 0v30H0V15h13V0h2z" />
    <path d="M2 17h11v11H2V17z" fill="#fff" />
    <path d="M14.5 5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
  </svg>
);

export default SvgComponent;
