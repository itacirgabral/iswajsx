import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h2v15H0V0zM5 0h2v15H5V0z" />
    <path d="M2 0v15h3V0H2z" fill="#fff" />
    <path d="M2 0v7h3V0H2z" />
  </svg>
);

export default SvgComponent;