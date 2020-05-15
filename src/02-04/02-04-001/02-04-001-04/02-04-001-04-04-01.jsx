import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 0h2v42H4V0zM10 0h2v42h-2V0z" />
    <path d="M6 0v42h4V0H6z" fill="#fff" />
    <path d="M0 19v4h16v-4H0z" />
  </svg>
);

export default SvgComponent;
