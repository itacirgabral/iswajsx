import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 0h15v15H14z" />
    <path fill="#fff" d="M16 2h6v11h-6z" />
    <path d="M0 0v1.989L14 2V0H0zM3.75 3.781l-1 1.719L14 12V9.656L3.75 3.781z" />
  </svg>
);

export default SvgComponent;
