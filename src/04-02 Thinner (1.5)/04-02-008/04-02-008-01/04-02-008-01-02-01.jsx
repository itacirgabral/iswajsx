import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 0L0 4l.719.719L4 1.406 7.281 4.72 8 4 4 0z" />
    <path d="M3.5 4v5h1V4h-1zM15 0l-4 4 .719.719L15 1.406l3.281 3.313L19 4l-4-4z" />
    <path d="M14.5 4v5h1V4h-1z" />
  </svg>
);

export default SvgComponent;
