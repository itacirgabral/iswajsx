import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h2v42H0V0zM6 0h2v42H6V0z" />
    <path d="M2 0v42h4V0H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;