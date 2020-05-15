import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 13h15v13H0zM7 0v7h2V2h4v9h2V0H7z" />
    <path fill="#fff" d="M2 15h6v9H2z" />
  </svg>
);

export default SvgComponent;
