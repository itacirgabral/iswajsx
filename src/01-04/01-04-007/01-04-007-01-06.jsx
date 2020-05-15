import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M9 5v2h6v2H9v2H0V9h7V7H0V5h9z" fill="#fff" />
  </svg>
);

export default SvgComponent;
