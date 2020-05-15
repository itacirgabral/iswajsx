import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 11h15v15H0zM7 0v7h2V2h4v9h2V0H7z" />
    <path fill="#fff" d="M2 13h6v11H2z" />
  </svg>
);

export default SvgComponent;
