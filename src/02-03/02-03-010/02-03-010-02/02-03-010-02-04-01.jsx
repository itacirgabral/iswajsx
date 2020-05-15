import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M23 0v20H2V3H0v19h25V0h-2z" />
    <path d="M17 0v14H8V3H6v13h13V0h-2z" />
    <path d="M19 0v16H6V3H2v17h21V0h-4z" fill="#fff" />
  </svg>
);

export default SvgComponent;
