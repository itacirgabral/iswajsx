import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h6v9H2z" />
    <path d="M16 10L9 3v3l4 4-4 4v1h2l5-5zM7 0h2v15H7z" />
  </svg>
);

export default SvgComponent;
