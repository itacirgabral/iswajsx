import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h2.719l5.219-5.25L13.188 8H16L8 0z" />
    <path d="M27 5v20H6V8H4v19h25V5h-2z" />
    <path d="M21 5v14h-9V8h-2v13h13V5h-2z" />
    <path d="M23 5v16H10V8H6v17h21V5h-4z" fill="#fff" />
  </svg>
);

export default SvgComponent;