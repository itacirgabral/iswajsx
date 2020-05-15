import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 0h2v42H2V0zM8 0h2v42H8V0z" />
    <path d="M4 0v42h4V0H4z" fill="#fff" />
    <path d="M6 15.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" />
  </svg>
);

export default SvgComponent;
