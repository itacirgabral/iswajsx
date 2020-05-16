import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={42} {...props}>
    <path d="M0 0h2v42H0V0zM6 0h2v42H6V0z" />
    <path d="M2 0v42h4V0H2z" fill="#fff" />
    <path d="M2 0v7h4V0H2z" />
  </svg>
);

export default SvgComponent;
